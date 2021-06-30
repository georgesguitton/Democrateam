<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section id="creer" class="container col-12 form1-creer" >
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4" >

          <form class="card form-creer" @submit.prevent="changeParticipants">
            <h2 class="title_create">Créer votre élection</h2>

            <div class="form-group">
              <label>Nombre de candidats</label>
              <input
                  v-model="participants"
                  type="number"
                  min="1"
                  max="20"
                  placeholder="Nombre de candidats à l'élection"
                  name="nom_election"
                  required
              />
            </div>
            <button v-on:click="changeParticipants()"
                class="btn btn-primary btn-login"
                type="submit"
            >
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
  },
  data() {
    return {
      participants: Number,
    };
  },
  methods: {
    changeParticipants(){
      this.$emit("change-participants",this.participants)
      router.push('/formulaireElection')
    }
  },
};
</script>

