const Home = window.httpVueLoader('./components/Home.vue')
const ListeElections = window.httpVueLoader('./components/ListeElections.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const CreerElection = window.httpVueLoader('./components/CreerElection.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const PageElection = window.httpVueLoader('./components/PageElection.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Thankyou = window.httpVueLoader('./components/Thankyou.vue')
const AjoutCandidat = window.httpVueLoader('./components/AjoutCandidat.vue')
const Vote = window.httpVueLoader('./components/Vote.vue')
const AjoutParticipant = window.httpVueLoader('./components/AjoutParticipant.vue')
const routes = [
    { path: '/', component: Home },
    { path: '/listeElections', component: ListeElections },
    { path: '/contact', component: Contact },
    { path: '/creerElection', component: CreerElection },
    { path: '/login', component: Login },
    { path: '/pageElection', component: PageElection },
    { path: '/profil', component: Profil },
    { path: '/thankyou', component: Thankyou },
    { path: '/register', component: Register },
    { path: '/ajoutCandidat', component: AjoutCandidat },
    { path: '/ajoutParticipant', component: AjoutParticipant },
    { path: '/vote', component: Vote },

]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app',
    data: {
        elections: [],
        inscriptions: [],
        types: [],
        ajoutParticipant:{
            id:0,
            email:""
        },
        candidats: [],
        election: {
            info: [],
            candidat: []
        },
        participants: 0,
        /*creationElection: {
            data: {},
            candidats: []
        },*/
        user: {},
        connected: false
    },
    async mounted() {
        // Test recup toutes les elections
        const res = await axios.get('/api/elections')
        this.elections = res.data
            //Fin test
        try {
          const res2 = await axios.get('/api/me')
          this.user = res2.data
          this.connected = true
          console.log('connected')
        }
        catch (erreur) {
          if (erreur.response.status === 401) {
            this.connected = false
          }
          else {
              console.log('erreur', erreur)
          }
        }
        router.push('/')

    },
    methods: {
        async getInscriptions() {
            const res = await axios.get('/api/inscriptions')
            this.inscriptions = res.data
        },
        async getElections() {
            const res = await axios.get('/api/elections')
            this.elections = res.data
        },
        async getTypes() {
          const res = await axios.get('/api/typeElections')
          this.types = res.data
        },
        async getElection(id) {
            const res = await axios.get('/api/getCandidat/' + id)
            this.election.info = this.elections.find(election => election.idElection === id)
            this.election.candidat = res.data
            router.push('/PageElection')
        },
        async logIn(user) {
            const userInfo = await axios.post('/api/login/', user)
                .catch(function(error) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        document.getElementById('errorLogInMessage').innerHTML = "La combinaison est incorrecte.";
                        return error.response;
                    }
                })
            if (userInfo.status === 200) {
                this.user = userInfo.data;
                this.connected = true;
                router.push('/')
            }
        },
        async logOut() {
            if (await axios.post('/api/logout/')
                .catch(function(error) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        console.log(error)
                    }
                })) {
                this.connected = false;
                this.elections = [];
                this.inscriptions = [];
                router.push('/')
            }
        },
        async changeParticipants(participants) {
            this.participants = parseInt(participants)
            router.push('/CreerElection')
            router.push('/FormulaireElection')
        },
        async voter(selected) {
            await axios.post('/api/voter/', selected)
            this.election = []
            router.push('/')
        },

        // PROFILE METHODS
        async editPassword(passwordInfo) {
            const editResult = await axios.put('/api/editPassword/', passwordInfo)
                .catch(function(error) {
                    if (error.response.status === 401) {
                        document.getElementById('errorEditPasswordMessage').innerHTML = "Nouveaux mots de passe non identique.";
                        document.getElementById('successEditPasswordMessage').innerHTML = "";
                        console.log(error)
                        return error.response;
                    } else if (error.response.status === 400) {
                        document.getElementById('errorEditPasswordMessage').innerHTML = "Ancien mot de passe incorrect.";
                        document.getElementById('successEditPasswordMessage').innerHTML = "";
                        console.log(error)
                        return error.response;
                    } else if (error.response.status === 404) {
                        document.getElementById('errorEditPasswordMessage').innerHTML = "Une erreur est survenue.";
                        document.getElementById('successEditPasswordMessage').innerHTML = "";
                        console.log(error)
                        return error.response;
                    }
                })
            if (editResult.status === 200) {
                document.getElementById('errorEditPasswordMessage').innerHTML = "";
                document.getElementById('successEditPasswordMessage').innerHTML = "Mot de passe modifié avec succès.";
            }
        },
        async editInfos(userInfo, electorId) {
            const userInfos = await axios.get('/api/user/')
                .catch(function(error) {
                    console.log(error.response);
                })
            console.log(userInfo)
            if (userInfos.data.numElecteur == null && electorId != "") {
                userInfo.electorId = electorId
            }
            const editUserInfos = await axios.put('/api/editUserInfos/', userInfo)
                .catch(function(error) {
                    document.getElementById('errorEditInfosMessage').innerHTML = "Une erreur est survenue.";
                    document.getElementById('successEditInfosMessage').innerHTML = "";
                    console.log(error)
                    return error.response;
                })
            if (editUserInfos.status === 200) {
                document.getElementById('errorEditInfosMessage').innerHTML = "";
                document.getElementById('successEditInfosMessage').innerHTML = "Informations modifiées avec succès.";
            }
        },
        async creationElection(information) {
            const id = await axios.post('/api/creerElection', information)
            console.log(id.data)
            this.ajoutParticipant.id = id.data
            const res = await axios.get('/api/getCandidat/' + id.data)
            this.candidats = res.data
            router.push('/ajoutCandidat')
        },

        async updateCandidats(candidats) {
            const res = await axios.put('/api/updateCandidats', candidats)
        },
        /*  async creationElection(creationElection) {
              if (await axios.post('/api/FormulaireElection/')
                  .catch(function(error) {
                      if (error.response.status === 400 || error.response.status === 401) {
                          console.log(error)
                      }
                  }))
              {
                  router.push('/')
              }
          }, */
    }
})