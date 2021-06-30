<template>
  <div class="index">
    <section id="creer" class="container col-12 form1-creer" >
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4" >

          <form class="card form-creer" @submit.prevent="test">
            <h2 class="title_create">Voter pour l'{{election.info.titre}}</h2>
        <br><br>
        <div class="form_content" v-for="candidat in election.candidat" :key="election.candidat.idChoix">
          <input class="form-check-input" type="radio" name="flexRadioDefault">
          <label class="" >
            {{ candidat.libelle}}
          </label>
        </div>
        <br>
        <button class="btn btn-primary btn-vote_candidat text-white" type="submit">Voter</button>
        <br><br>
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
    elections: { type: Array, default: [] },
    election: { type: Object },
  },
  data () {
    return {
    }
  },
  async mounted () {
  },
  methods: {
    logIn() {
      this.$emit("log-in", this.user);
    },
    logOut() {
      this.$emit("log-out");
    },

    getElection (id) {
      this.$emit('getElection',id)
    },

  }
}

</script>

<style>



.btn-vote_candidat {
  margin-left: 40%;
  margin-right: 40%;
}
</style>