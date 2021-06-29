const Home = window.httpVueLoader('./components/Home.vue')
const ListeElections = window.httpVueLoader('./components/ListeElections.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const CreerElection = window.httpVueLoader('./components/CreerElection.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const PageElection = window.httpVueLoader('./components/PageElection.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Thankyou = window.httpVueLoader('./components/Thankyou.vue')
const FormulaireElection = window.httpVueLoader('./components/FormulaireElection.vue')

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
    { path: '/formulaireElection', component: FormulaireElection },
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
        election: {
            info: [],
            candidat: []
        },
        participants :0,
        user: {},
        connected: false
    },
    async mounted() {
        // Test recup toutes les elections
        const res = await axios.get('/api/elections')
        this.elections = res.data
            //Fin test

    },
    methods: {
        async getInscriptions(){
          const res = await axios.get('/api/inscriptions')
          this.inscriptions = res.data
        },
        async getElections() {
          const res = await axios.get('/api/elections')
          this.elections = res.data
        },
        async getElection(id) {
            const res = await axios.get('/api/getElection/' + id)
            this.election.info = this.elections.find(election => election.idElection === id)
            this.election.candidat = res.data
            router.push('/PageElection')
        },
        async logIn(user) {
            const userTeam = await axios.post('/api/login/', user)
                .catch(function(error) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        document.getElementById('errorLogInMessage').innerHTML = "La combinaison est incorrecte.";
                        return error.response;
                    }
                })
            if (userTeam.status === 200) {
                this.team = userTeam.data;
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
                router.push('/')
            }
        },
        async changeParticipants(participants) {
            this.participants = parseInt(participants)
            router.push('/CreerElection')
            router.push('/FormulaireElection')
        },
    }
})
