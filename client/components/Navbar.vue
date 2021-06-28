<template>
  <div class="container-fluid sticky-top no-padding">
    <div class="col-12 no-padding">
      <nav class="navbar navbar-expand-lg navbar-light bg-light little-padding">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            class="container-fluid navbar-nav text-center align-items-center"
          >
            <router-link
              class="navbar-brand col-lg-2 no-padding no-margin"
              to="/"
            >
              <img
                src="./images/Logo_sb.png"
                height="65"
                alt="Logo du site 'Democrateam'"
              />
            </router-link>

            <div class="col-lg-10 container d-flex">
              <router-link class="col-lg-2 nav-item nav-link active" to="/"
                >Accueil<span class="sr-only">(current)</span></router-link
              >
              <router-link
                class="col-lg-2 nav-item nav-link"
                to="/ListeElections"
                >Liste des élections</router-link
              >
              <router-link
                class="col-lg-2 nav-item nav-link"
                to="/CreerElection"
                >Créer une élection</router-link
              >
              <router-link class="col-lg-2 nav-item nav-link" to="/Contact"
                >Contact</router-link
              >
              <router-link v-if="connected === false" class="col-lg-2 nav-item nav-link" to="/Login"
                >Connexion</router-link
              >
              <router-link v-else class="col-lg-2 nav-item nav-link" to="/Profil"
                >Mon profil</router-link
              >
              <router-link v-if="connected === false" class="col-lg-2 nav-item nav-link" to="/register"
                >Créer un compte</router-link
              >
              <a v-else class="col-lg-2 nav-item nav-link" @click="logOut()"
                >Se déconnecter</a
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    connected: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>