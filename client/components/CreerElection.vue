<template>
<div>
  <navbar :connected="connected" @log-out="logOut"></navbar>
  <section id="creer" class="container col-12 form1-creer">
    <div class="row justify-content-center">
      <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4">

        <form class="card form-creer" @submit.prevent="creerElection">
          <h2 class="title_create">Créer votre élection</h2>
          <div class="">
            <div class="form-group">
              <label>Nom de l'élection</label>
              <input v-model="creationElection.data.titreElection" type="text" placeholder="Entrez le nom de l'élection" name="nom_election" required />
            </div>
            <div class="form-group">
              <label>Description de l'élection</label>
              <input v-model="creationElection.data.descriptionElection" type="text" placeholder="Entrez la description de l'élection" name="nom_election" required />
            </div>
            <div class="form-group">
              <label>Date de début de l'élection</label>
              <input v-model="creationElection.data.dateDebut" type="date" placeholder="Entrez la date de début de l'élection" name="nom_election" required />
            </div>
            <div class="form-group">
              <label>Date de fin de l'élection</label>
              <input v-model="creationElection.data.dateFin" type="date" placeholder="Entrez la date de fin de l'élection" name="nom_election" required />
            </div>
            <div class="form-group">
              <label>Image de l'élection</label>
              <input v-model="creationElection.data.imageElection" type="text" placeholder="Entrez l'url de l'image de l'élection" name="nom_election" required />
            </div>
            <div class="form-group">
              <label>Type de l'élection</label>
              <select v-model="creationElection.data.typeElection">
                  <option v-for="type in types" :value="type.idTypeElection">
                      {{type.titre}}
                  <option>
              </select>
            </div>


            <div class="form-group">
              <label>Nombre de candidats</label>
              <input v-model="creationElection.data.participants" type="number" min="1" max="20" placeholder="Nombre de candidats à l'élection" name="nom_election" required />
            </div>
            <button class="btn btn-primary btn-login" type="submit">
              Passer à la suite
            </button>
          </div>
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
    connected: {
      type: Boolean
    },
    types: { type: Array, default: [] },
  },
  async mounted() {
      if (!this.connected){
        this.$router.push('/login')
      }
      else{
        this.$emit("get-types")
      }
  },
  data() {
    return {
      creationElection: {
        data: {
          titreElection: "",
          descriptionElection: "",
          dateDebut: "",
          dateFin: "",
          imageElection: "",
          typeElection: 0,
          participants: 0,
        },
      },
    };
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
    async creerElection() {
      this.$emit('creation-election',this.creationElection)
    }
  },
};
</script>
