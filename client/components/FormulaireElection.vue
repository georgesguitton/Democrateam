<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section  class="container col-12">
      <div class="row justify-content-center">
        <div id="container" class="col-md-6 col-sm-8 col-lg-5 col-xl-4" >

          <form class="card form-creer" @submit.prevent="test">
            <h2 class="title_create">Créer votre élection</h2>
            <div class="card card-candidat contener-election" v-for="n in 4">

            <div class="form-group">
              <label>Nom du candidat</label>
              <input
                  type="text"
                  placeholder="Entrez le nom du candidat"
                  name="nom_candidat"
                  required
              />
            </div>

            <div class="form-group">
              <label>Description du candidat</label>
              <br>
              <textarea
                  placeholder="Entrez la description courte du candidat"
                  name="desc_candidat"
                  required
              ></textarea>
            </div>

            <div class="form-group">
              <label>URL de l'image du candidat</label>
              <input
                  type="text"
                  placeholder="Entrez l'URL de l'image du candidat"
                  name="image_candidat"
                  required
              />
            </div>

            <div class="form-group">
              <label>URL du site du candidat</label>
              <input
                  type="text"
                  placeholder="Entrez l'URL du site du candidat"
                  name="url_candidat"
                  required
              />
            </div>
            </div>
            <button
                class="btn btn-primary btn-login"
                type="submit"
            >
              Valider l'élection
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
    return {};
  },
  methods: {
    test() {
      router.push('/formulaireElection')
    },
  },
};
</script>

