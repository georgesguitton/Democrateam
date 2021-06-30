<template>
  <div class="index fond">
    <section id="creer" class="container col-12 form1-creer" >
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4" >
          <div class="card" >
            <h2 class="title_create ">Voter pour l'{{election.info.titre}}</h2>
            <br><br>
          <div v-for="c in election.candidat">
            <input  type="radio" v-model="selected.id" name="selected" :value="c.idChoix">
            <p>{{c.libelle}}</p>
          </div>
          <button class="btn btn-primary btn-vote_candidat text-white" @click="voter()"> Voter </button>

        </div>
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
      selected:{
        id:0,
        idElection:this.election.info.idElection
      }
    }
  },
  async mounted () {
  },
  methods: {
    getElection (id) {
      this.$emit('getElection',id)
    },
    voter(){
        this.$emit('voter',this.selected);
      }
    }

  }

</script>
<style>

.fond{
  background-image: url("../images/logo_mini.png") ;
  background-repeat:no-repeat;
  background-position:left top;

}

</style>
