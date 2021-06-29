<template>
<div class="index">
  <header class="masthead bg-primary text-white text-center index ">
    <svg class="container d-flex align-items-center flex-column index">
      <!-- Masthead Heading-->
      <h1 class="masthead-heading text-uppercase mb-0">{{election.info.titre}}</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Avatar Image-->

      <svg class="objet-img  divider-custom indexe align-items-center" :style="{ backgroundImage: 'url('+ election.info.urlImage +')' }"
      ></svg>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"></div>
        <div class="divider-custom-line"></div>
      </div>

      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0"> {{election.info.dateDebut}} -  {{election.info.dateFin}} </p>

    </svg>
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

                       <div class="col-lg-8 col-12" v-for="candidat in election.candidat" :key="election.candidat.idChoix">

<div class="card">
                         <p>{{ candidat.libelle}}</p>

                                          <svg class="bd-placeholder-img card-img-top objet-img" :style="{ backgroundImage: 'url('+ candidat.urlImage +')' }" >

                                           <title>Une chose</title>

                                          </svg>

                                          <div class="card-body">
                                            <p class="card-text">{{candidat.description}} - {{candidat.lienInfo}}</p>
                                            <p class="card-text"> Pour plus d'information, consultez le site {{candidat.lienInfo}}</p>
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

<style>
.objet-img{
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  max-height: 500px;
  background-position: center center;
}
.index{
  z-index: 1;
}
.indexe{
  z-index: 80;
}


</style>
