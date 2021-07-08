<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section id="login" class="container col-12">
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4">
          <!-- zone de connexion -->

          <form class="card" @submit.prevent="logIn">
            <h1>Connexion</h1>

            <div class="form-group">
              <label>E-mail</label>
              <input
                type="text"
                v-model="user.username"
                placeholder="Entrer l'email"
                name="username"
                required
              />
            </div>

            <div class="form-group">
              <label>Mot de passe</label>
              <input
                type="password"
                v-model="user.password"
                placeholder="Entrer le mot de passe"
                name="password"
                required
              />
            </div>

            <div>
              <p id="errorLogInMessage"></p>
            </div>

            <button
              class="btn btn-primary btn-login"
              id="envoyer-form"
              type="submit"
            >
              Connexion
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
      user: {
        username: "",
        password: "",
      },
    };
  },
  async mounted() {
    if (this.connected){
      this.$router.push('/')
    }

  },
  methods: {
    logIn() {
      this.$emit("log-in", this.user);
    },
    logOut() {
      this.$emit("log-out");
    },
  },
};
</script>
