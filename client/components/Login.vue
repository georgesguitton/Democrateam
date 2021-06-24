<template>
  <section id="login" class="container col-12">
      <div class="row justify-content-center">
          <div id="container" class="col-md-auto row justify-content-center">
              <!-- zone de connexion -->

              <form class="card col-sm-12 col-md-6 col-lg-4">
                  <h1>Connexion</h1>

                  <div class="form-group">
                      <label>Nom d'utilisateur ou E-mail</label>
                      <input type="text" v-model="user.username" placeholder="Entrer le nom d'utilisateur" name="username" required />
                  </div>

                  <div class="form-group">
                      <label>Mot de passe</label>
                      <input type="password" v-model="user.password" placeholder="Entrer le mot de passe" name="password" required />
                  </div>

                  <div>
                      <p id="errorLogInMessage"></p>
                  </div>

                  <button class="btn btn-primary btn-login" id="envoyer-form" type="submit">Connexion</button>
              </form>
          </div>
      </div>
  </section>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  components: {
    Navbar,
  },
  props: {
    connected: { type: Boolean }
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      this.$emit("log-in", this.user);
    },
    logOut () {
      this.$emit('log-out')
    }
  },
};
</script>