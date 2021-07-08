<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section id="creer" class="container col-12 form1-creer">
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4">
    <form @submit.prevent="updateCandidat" class="card form-creer">
      <div v-for="candidat in candidats" :key="candidat.idChoix" class="text-center ajout-candidat" style="border: rgb(0, 43, 92) solid; border-radius: 5%">
        <div class="form-group">
          <label>Nom du candidat</label>
          <input v-model="candidat.libelle" type="text" placeholder="Nom candidat" name="" required />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input v-model="candidat.description" type="text" placeholder="Description" name="" required />
        </div>
        <div class="form-group">
          <label>Lien info</label>
          <input v-model="candidat.lienInfo" type="text" placeholder="Lien info" name="" required />
        </div>
        <div class="form-group">
          <label>Url image</label>
          <input v-model="candidat.urlImage" type="text" placeholder="Nom candidat" name="" required />
      </div>
      </div>
      <button class="btn btn-primary btn-login" type="submit">
        Passer à la suite
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
    candidats: { type: Array, default: [] },
  },
  data() {
    return {
    };
  },
  async mounted() {
    if (!this.connected){
      this.$router.push('/login')
    }
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
    updateCandidat() {
      this.$emit("update-candidats",this.candidats)
      this.$router.push('/ajoutParticipant')
    },
  },
};
</script>
