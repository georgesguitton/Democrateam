<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div class="container-fluid">
      <div class="p-2 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <div class="container d-flex">
            <img
              class="rounded-circle z-depth-1 col-2 d-sm-none d-md-block"
              src="./images/pp.jpg"
            />
            <h2 class="col-10 col-md-8 fs-4 d-flex align-items-center">
              Bienvenue, {{ user.firstname }} !
            </h2>
          </div>
        </div>
      </div>

      <div class="row align-items-md-stretch">
        <div class="col-lg-6">
          <div class="h-100 p-md-5 p-2 bg-light">
            <h2 class="text-justify col-12">Mes informations</h2>
            <form class="col-12">
              <div class="form-group">
                <label for="userid">Identifiant</label>
                <input
                  type="text"
                  v-model="user.electorId"
                  class="form-control"
                  id="userid"
                  aria-describedby="userid"
                  disabled
                />
              </div>
              <div class="form-group">
                <label for="userlastname">Nom</label>
                <input
                  type="text"
                  v-model="user.lastname"
                  class="form-control"
                  id="userlastname"
                />
              </div>
              <div class="form-group">
                <label for="userfirstname">Prénom</label>
                <input
                  type="text"
                  v-model="user.firstname"
                  class="form-control"
                  id="userfirstname"
                />
              </div>
              <div class="form-group">
                <label for="useremail">E-mail</label>
                <input
                  type="text"
                  v-model="user.email"
                  class="form-control"
                  id="useremail"
                />
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="h-100 p-md-5 p-2 bg-light">
            <h2 class="text-justify col-12 d-none d-lg-block">Mot de passe</h2>
            <form class="col-12" @submit.prevent="editPassword">
              <div class="form-group">
                <label for="currentpassword">Ancien mot de passe</label>
                <input
                  type="password"
                  v-model="editingPassword.oldPassword"
                  class="form-control"
                  id="currentpassword"
                  aria-describedby="currentpassword"
                  placeholder="Entrez le mot de passe actuel"
                />
              </div>
              <div class="form-group">
                <label for="newpassword">Nouveau mot de passe</label>
                <input
                  type="password"
                  v-model="editingPassword.newPassword"
                  class="form-control"
                  id="newpassword"
                  placeholder="Entrez votre nouveau mot de passe"
                />
              </div>
              <div class="form-group">
                <label for="confirmpassword">Confirmation mot de passe</label>
                <input
                  type="password"
                  v-model="editingPassword.confirmPassword"
                  class="form-control"
                  id="confirmpassword"
                  placeholder="Confirmez votre nouveau mot de passe"
                />
              </div>
              <div>
                <p id="errorEditPasswordMessage"></p>
              </div>
              <div>
                <p id="successEditPasswordMessage"></p>
              </div>
              <div class="form-group">
                <button id="sendpassword" type="submit" class="btn btn-primary">
                  Modifier le mot de passe
                </button>
              </div>
            </form>
          </div>
        </div>
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
    connected: { type: Boolean },
    user: { type: Object },
  },
  async mounted() {
    if (!this.connected){
      this.$router.push('/')
    }

  },
  data() {
    return {
      editingPassword: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    logIn() {
      this.$emit("log-in", this.user);
    },
    logOut() {
      this.$emit("log-out");
    },
    editPassword() {
      this.$emit("edit-password", this.editingPassword);
    },
  },
};
</script>

<style scoped>
#errorEditPasswordMessage {
  color:red;
}

#successEditPasswordMessage {
  color: rgb(0, 179, 39)
}
</style>
