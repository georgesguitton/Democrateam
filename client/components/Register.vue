<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section id="register" class="container col-12">
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

                    <div class="form-group">
                        <label>Nom</label>
                        <input type="text" v-model="user.lastname" placeholder="Entrer le nom" name="lastname" required />
                    </div>

                    <div class="form-group">
                        <label>Prénom</label>
                        <input type="text" v-model="user.firstname" placeholder="Entrer le prénom" name="firstname" required />
                    </div>

                    <div class="form-group">
                        <label>E-mail professionnel (facultatif)</label>
                        <input type="text" v-model="user.workmail" placeholder="Entrer l'email professionnel" name="workmail" />
                    </div>

                    <div>
                        <p id="errorLogInMessage"></p>
                    </div>

                    <button class="btn btn-primary btn-login" id="envoyer-form" type="submit">Inscription</button>
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
    connected: { type: Boolean }
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
        lastname: "",
        firstname: "",
        workmail: "",
      },
    };
  },
  methods: {
    async register() {
      const res = await axios.post('/api/register', this.user)
      .catch(function(error) {
          if (error.response.status === 401) {
              document.getElementById('errorLogInMessage').innerHTML = "Cet e-mail est déjà associé à un utilisateur";
              return error.response;
          }
      })
      if(res.status === 200){
          this.$router.push('/login')
      }
    },
  },
  logOut() {
      this.$emit("log-out");
    },
};
</script>
