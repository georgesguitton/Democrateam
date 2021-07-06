<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <form @submit.prevent="updateCandidat" class="text-center">
      <div v-for="candidat in candidats" :key="candidat.idChoix" class="col-12 text-center">
        <label>Nom du candidat</label>
        <input v-model="candidat.libelle" type="text" placeholder="Nom candidat" name="" required />

        <label>Description</label>
        <input v-model="candidat.description" type="text" placeholder="Description" name="" required />

        <label>Lien info</label>
        <input v-model="candidat.lienInfo" type="text" placeholder="Lien info" name="" required />

        <label>Url image</label>
        <input v-model="candidat.urlImage" type="text" placeholder="Nom candidat" name="" required />
      </div>
      <button class="btn btn-primary btn-login" type="submit">
        Passer à la suite
      </button>
    </form>
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
