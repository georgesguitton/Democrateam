<template>
  <section id="login" class="container col-12">
      <div class="row justify-content-center">
          <div id="container" class="col-md-auto">
              <!-- zone de connexion -->

              <form class="card">
                  <h1>Connexion</h1>

                  <div class="form-group">
                      <label>Nom d'utilisateur ou E-mail</label>
                      <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required />
                  </div>

                  <div class="form-group">
                      <label>Mot de passe</label>
                      <input type="password" placeholder="Entrer le mot de passe" name="password" required />
                  </div>

                  <div>
                      <p id="errorLogInMessage"></p>
                  </div>

                  <button class="btn btn-primary btn-login" id="envoyer-form" type="submit">Connexion</button>
              </form>
          </div>
      </div>
  </section>
</template>
