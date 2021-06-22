<template>
  <section id="creerElection" class="container col-12">
      <div class="creer_election">
          <div id="container" class="col-md-auto">
              <!-- zone de création d'élection -->

              <form class="form_creer_election" style="background-color: lightgray;">
              <div class="form_content">
                  <h2 style="text-align: center;">Créer votre élection</h2>
                  <br>

                  <div class="form-group">
                      <label>Nom de votre élection : </label>
                      <input type="text" style="width: 69%;" placeholder="Entrez le nom de l'élection" name="nom_election" required />
                  </div>
                  <br>

                  <h3 style="text-align: center;">Enregistrer les candidats</h3>
                  <br>

                  <div class="form-group">
                      <label>Nom du candidat :</label>
                      <input type="text" style="width: 75%;" placeholder="Entrez le nom du candidat" name="nom_candidat"/>
                  </div>

                  <div class="form-group">
                      <label>Description du candidat :</label>
                      <textarea rows="5" style="width: 100%;" type="text" placeholder="Entrez la description du candidat" name="description_candidat"></textarea>
                  </div>

                  <div class="form-group">
                      <label>Image :</label>
                      <input type="text" style="width: 89%;" placeholder="Entrez l'image du candidat" name="image_candidat"/>
                  </div>

                  <button class="btn btn-primary btn-ajouter_candidat" id="ajouter_candidat" type="submit">Ajouter le candidat</button>
                  <br><br>

                  <button class="btn btn-primary btn-valider_election" id="valider_election" type="submit">Valider l'élection</button>
              </div>
              </form>
          </div>
      </div>
  </section>
</template>
