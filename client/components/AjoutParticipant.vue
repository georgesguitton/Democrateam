<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <form @submit.prevent="addParticipant">
      <label>E-mail du participant</label>
      <input v-model="ajoutparticipant.email" type="text" placeholder="Nom candidat" name="" required />

      <button class="btn btn-primary btn-login" type="submit">
        Ajouter le participant
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
    ajoutparticipant: {type: Object},
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
    async addParticipant() {

      const res = await axios.post('/api/addParticipant', this.ajoutparticipant).catch(function(error) {
      if (error.response.status === 400) {
              alert("Pas d'email associé à un utilisateur")
              return error.response;
          }
      })
      if(res.status === 200){
          this.ajoutparticipant.email=""
      }


    },
  },
};
</script>
