<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <form @submit.prevent="addParticipant">

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
  },
  data() {
    return {
    };
  },
  async mounted() {
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
    addParticipant() {
      this.$emit("update-candidats",this.candidats)
      this.$router.push('/')
    },
  },
};
</script>
