<template>
<div>
  <navbar :connected="connected" @log-out="logOut"></navbar>

  <div class="container-fluid">

    <div v-if="inscriptions !== null">
      <h3 class="text-center">Elections auxquelles vous pouvez vous inscrire à distance</h3>
      <div class="row">
        <div v-for="inscription in inscriptions" :key="inscription.idTypeElection" class="col-lg-4 col-md-6 col-12 mb-3" @click="inscrireElection(inscription.idTypeElection)">
          <div class="hover hover-2 text-white rounded">
            <img src="../images/Box.png" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-2-content px-5 py-4">
              <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                {{ inscription.titre }}
              </h3>
              <p class="hover-2-description text-uppercase mb-0">
                {{ inscription.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" v-else>
      <h3 class="text-center">Aucune inscription pour des élections à distance</h3>
    </div>

    <div v-if="inscriptions !== null">
      <h3 class="text-center">Elections auxquelles vous pouvez participer</h3>
      <div class="row">
        <div v-for="election in elections" :key="election.idElection" class="col-lg-4 col-md-6 col-12 mb-3" @click="afficherElection(election.idElection)">
          <div class="hover hover-2 text-white rounded">
            <img src="../images/Box.png" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-2-content px-5 py-4">
              <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                {{ election.titre }}
              </h3>
              <p class="hover-2-description text-uppercase mb-0">
                {{ election.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center">Aucun vote de disponible</h3>
    </div>

  </div>
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
    elections: {
      type: Array,
      default: []
    },
    inscriptions: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      inscritElection :{
        idElection : 0
      },
    };
  },
  async mounted() {
    if (!this.connected){
      this.$router.push('/login')
    }
    this.$emit('get-elections')
    this.$emit('get-inscriptions')
  },
  methods: {
    logIn() {
      this.$emit("log-in", this.user);
    },
    logOut() {
      this.$emit("log-out");
    },
    afficherElection(id) {
      this.$emit("get-election", id);
    },
    async inscrireElection(id){
      this.inscritElection.idElection = id
      const res = await axios.post('/api/inscrireElection', this.inscritElection).catch(function(error) {
          if (error.response.status === 400) {
              alert("Veuillez fournir votre N° d'électeur pour vous inscrire")
              router.push('/profil')
              return error.response;
          }
      })
      if(res.status === 200){
          this.$emit('get-inscriptions')
      }
    },
  },
};
</script>
