<template>
<div>
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Heading-->
      <h1 class="masthead-heading text-uppercase mb-0">{{election.info.titre}}</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Avatar Image-->
      <img src="https://th.bing.com/th/id/R4df180105dc4bea229839cf0ce8d85dd?rik=99BXfH9QgMRlzA&pid=ImgRaw" class="col-md-8" />
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0"> {{election.info.dateDebut}} -  {{election.info.dateFin}} </p>
    </div>
  </header>
  <!-- Portfolio Section-->
  <section class="page-section portfolio" id="portfolio">
    <div class="container">
      <!-- Portfolio Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Candidats</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Candidat liste-->
      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                       <div class="col" v-for="candidat in election.candidat" :key="election.candidat.idChoix">


                         <p>{{ candidat.libelle}}</p>
                                        <div class="card shadow-sm">
                                          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                            <title>Une chose</title>
                                            <rect width="100%" height="100%" fill="#55595c" />
                                          </svg>

                                          <div class="card-body">
                                            <p class="card-text">{{candidat.description}}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                              <div>
                                                <a href="#">Plus d'information</a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>

                                    </div>
                                  </div>
   </div>
    </div>
 </section>
 <!-- About Section-->
  <section class="page-section bg-primary text-white mb-0" id="about">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-white">Descriptif</h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- About Section Content-->
      <div class="text-center mt-4">
          <p class="lead text-center text-white">{{election.info.description}}</p>
        </div>

      </div>
      <!-- About Section Button-->
      <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
          <i class="fas fa-download me-2"></i>
          Votez
        </a>
      </div>

  </section>
</div>
</template>
<script>
module.exports = {
  props: {
    elections: { type: Array, default: [] },
    election: { type: Object },
  },
  data () {
    return {
    }
  },
  async mounted () {
  },
  methods: {

    getElection (id) {
      this.$emit('getElection',id)
    }
  }
}







</script>