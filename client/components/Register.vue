<template>
  <section id="login" class="container col-12">
      <div class="row justify-content-center">
          <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4">
              <!-- zone de connexion -->

              <form class="card" @submit.prevent="register">
                  <h1>Inscription</h1>

                  <div class="form-group">
                      <label>E-mail</label>
                      <input type="text" v-model="user.username" placeholder="Entrer l'email" name="username" required />
                  </div>

                  <div class="form-group">
                      <label>Mot de passe</label>
                      <input type="password" v-model="user.password" placeholder="Entrer le mot de passe" name="password" required />
                  </div>

                  <div>
                      <p id="errorLogInMessage"></p>
                  </div>

                  <button class="btn btn-primary btn-login" id="envoyer-form" type="submit">Inscription</button>
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
    async register() {
      await axios.post('/api/register', this.user)
      this.$router.push('/login')
    },
  },
};
</script>
