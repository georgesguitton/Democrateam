<template>
  <div class="container-fluid">

      <div class="p-md-5 p-2 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
              <h2> Bienvenue sur Democrateam </h2>
              <p class="col-md-8 fs-4">
                  La plateforme de vote à distance fiable et sécurisée.
              </p>
          </div>
      </div>



      <div class="row align-items-md-stretch">
          <div class="col-md-6">
              <div class="h-100 p-md-5 p-2 text-white bg-dark rounded-3">
                  <h2 class="text-justify col-12"> Voter à une élection </h2>
                  <p class="text-justify col-12">
                      &bull; Une fois connecté à la plateforme, rendez vous sur la page de la liste des élections.<br> &bull; Sélectionner alors l'élection à laquelle vous souhaitez voter et appuyer sur le bouton "Voter".<br> &bull; Renseignez alors
                      votre choix de candidat puis valider le.<br> &bull; Voilà, votre vote a été soumis.
                  </p>
                  <button class="btn btn-outline-light" type="button"><router-link to=""> Liste des élections </router-link>  </button>
              </div>
          </div>

          <div class="col-md-6">
              <div class="h-100 p-md-5 p-2 bg-light border rounded-3">
                  <h2 class="text-justify col-12"> Créer une élection </h2>
                  <p class="text-justify col-12">
                      &bull; Une fois connecté à la plateforme, rendez vous sur la page de création d'élection.<br> &bull; Renseignez alors les informations des candidats à l'élection ainsi que la liste des votant.<br> &bull; Validez votre l'élection.<br>                        &bull; Voilà, votre élection a été créée.
                  </p>
                  <button class="btn btn-outline-secondary" type="button"><router-link to=""> Créer une élection <router-link></button>
              </div>
          </div>

      </div>
  </div>
</template>
