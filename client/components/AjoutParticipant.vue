<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section id="creer" class="container col-12 form1-creer">
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4">
    <form class="card form-creer" @submit.prevent="addParticipant">
      <div class="form-group">
        <label>E-mail du participant</label>
        <input v-model="ajoutparticipant.email" type="text" placeholder="Email" name="" required />
      </div>
      <button class="btn btn-primary btn-login" type="submit">
        Ajouter le participant
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
