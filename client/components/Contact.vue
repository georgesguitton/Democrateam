<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div class="container col-12 test">
      <div class="row">
        <div class="col-6" style="border: solid black">
          <h2 class="titre-contact">Bienvenue sur Democrateam</h2>
          <img class="logo-contact" src="../images/logo_sb.png" width="20%" />

          <p>
            Vous rencontrez un problème avec le site, vous voulez nous faire
            votre retour d'expérience ? Ici vous pouvez écrire un mail qui sera
            traité dans les plus brefs délais par notre équipe de modération.
          </p>
        </div>
        <div class="col-6" style="border: solid black">
          <form method="post" action="">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                name="objet"
                placeholder="Objet du mail"
                size="50"
                id="objet"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                type="text"
                name="corps"
                placeholder="Écrivez votre requête ici"
                rows="10"
                cols="100"
                id="corps"
                required
              ></textarea>
            </div>
            <button
              class="btn btn-primary btn-contact"
              id="envoyer-form"
              type="submit"
            >
              Envoyer
            </button>
          </form>
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
  },
  data() {
    return {};
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