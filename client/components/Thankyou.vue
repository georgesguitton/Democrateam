<template>
<div class="divTy">
  <h2>Merci beaucoup pour votre mail !</h2>
  <p>Notre équipe fait maintenant tout son possible pour y répondre dans les plus brefs délais !</p>
  <button class="btn btn-ty" v-on:click="test()">Retour Accueil</button>
  <img class="img-fluid" src="../images/service_client.png">
</div>
</template>
<script>
module.exports = {
  components: {
  },
  props: {
  },
  data() {
    return {};
  },
  methods: {
    test() {
      router.push('/')
    },
  },
}
</script>

