<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div class="container col-12 contact-div">
      <div class="row">
        <div class="col-md-6" id="div1">
          <h2 class="titre-contact">Bienvenue sur Democrateam</h2>
          <p class="text-contact">Vous rencontrez un problème avec le site, vous voulez nous faire votre retour d'expérience ? Ici vous pouvez écrire un mail qui sera traité dans les plus brefs délais par notre équipe de modération.<br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc nulla, fringilla sed pretium eu, eleifend vitae felis. Fusce blandit est ut enim eleifend luctus. Nunc at semper dolor. Donec in nulla pellentesque, elementum diam vel, faucibus felis. Donec sed nulla eros. Integer laoreet sollicitudin finibus. Cras non tempus mi. Ut luctus nisl eu condimentum imperdiet. In gravida, augue id auctor pulvinar, felis ex dapibus turpis, sed tincidunt nunc erat id nulla. Aenean pharetra nibh finibus interdum pharetra. Maecenas enim est, facilisis at eleifend eget, viverra sit amet tortor.
          </p>
        </div>
        <div class="col-md-6" id="div2">
          <h2 class="titre-contact">Écrivez-nous !</h2>
          <form action="https://formsubmit.co/democrateam@yopmail.com" method="POST">
            <div class="form-group">
              <input class="form-control" type="text" name="mail" placeholder="Votre mail" size="50" id="mail" required>
            </div>
            <div class="form-group">
              <input class="form-control" type="text" name="objet" placeholder="Objet du mail" size="50" id="objet" required>
            </div>
            <div class="form-group">
              <textarea class="form-control" type="text" name="corps" placeholder="Écrivez votre requête ici" rows="10" cols="100" id="corps" required></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="http://localhost:3000/#/Thankyou">
            <button class="btn btn-contact" id="envoyer-form" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
      <div>
        <img class="img-fluid" src="../images/service_client.png">
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