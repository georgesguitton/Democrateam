<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section  class="container col-12">
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4" >

          <form class="card form-creer" @submit.prevent="passerPageSuivante">
            <h2 class="title_create">Créer votre élection</h2>
            <div class="card card-candidat contener-election form-group">
              <div class="form-group">
              <label>Nom de l'élection</label>
              <input
                  v-model="creationElection.data.titre_election"
                  type="text"
                  placeholder="Entrez le nom de l'élection"
                  name="nom_election"
                  required
              />
            </div>
            <div class="form-group">
              <label>Description de l'élection</label>
              <input
                  v-model="creationElection.data.description_election"
                  type="text"
                  placeholder="Entrez la description de l'élection"
                  name="nom_election"
                  required
              />
            </div>
            <div class="form-group">
              <label>Date de début de l'élection</label>
              <input
                  v-model="creationElection.data.date_debut"
                  type="date"
                  placeholder="Entrez la date de début de l'élection"
                  name="nom_election"
                  required
              />
            </div>
            <div class="form-group">
              <label>Date de fin de l'élection</label>
              <input
                  v-model="creationElection.data.date_fin"
                  type="date"
                  placeholder="Entrez la date de fin de l'élection"
                  name="nom_election"
                  required
              />
            </div>
            <div class="form-group">
              <label>Image de l'élection</label>
              <input
                  v-model="creationElection.data.image_election"
                  type="text"
                  placeholder="Entrez l'url de l'image de l'élection"
                  name="nom_election"
                  required
              />
            </div>
              <div class="form-group">
                <label>Type de l'élection</label>
                <input
                    v-model="creationElection.data.type_election"
                    type="number"
                    placeholder="Entrez le type de l'élection"
                    name="nom_election"
                    required
                />
              </div>
            </div>
            <div class="card card-candidat contener-election" v-for="n in participants">
            <div class="form-group">
              <label>Nom du candidat</label>
              <input
                  v-model="creationElection.candidats.candidat.nom_candidat"
                  type="text"
                  placeholder="Entrez le nom du candidat"
                  name="nom_candidat"
                  required
              />
            </div>

            <div class="form-group">
              <label>Description du candidat</label>
              <br>
              <textarea
                  v-model="creationElection.candidats.candidat.description_candidat"
                  placeholder="Entrez la description courte du candidat"
                  name="desc_candidat"
                  required
              ></textarea>
            </div>

            <div class="form-group">
              <label>URL de l'image du candidat</label>
              <input
                  v-model="creationElection.candidats.candidat.image_candidat"
                  type="text"
                  placeholder="Entrez l'URL de l'image du candidat"
                  name="image_candidat"
                  required
              />
            </div>

            <div class="form-group">
              <label>URL du site du candidat</label>
              <input
                  v-model="creationElection.candidats.candidat.site"
                  type="text"
                  placeholder="Entrez l'URL du site du candidat"
                  name="url_candidat"
                  required
              />
            </div>
            </div>
            <button v-on:click="creationElections()"
                class="btn btn-primary btn-login"
                type="submit"
            >
              Valider l'élection
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  components: {
    Navbar,
  },
  props: {
    connected: { type: Boolean },
    participants: {type : Number}
  },
  data() {
    return {
      creationElection: {
        data : {
          titre_election:"",
          description_election:"",
          date_debut:"",
          date_fin:"",
          image_election:"",
          type_election:""
        },
        candididats:[]
        },
        candidat : {
          nom_candidat:"",
          description_candidat:"",
          image_candidat:"",
          site_candidat:"",
     }
    };
  },
  methods: {
    passerPageSuivante() {
      router.push('/formulaireElection')
    },
    async creationElections() {
      const res = await axios.post('/api/FormulaireElection/')
          .catch(function(error) {
            if (error.response.status === 401) {
              return error.response;
            }
          })
      if(res.status === 200){
        router.push('/')
      }
    }
  },
};
</script>

