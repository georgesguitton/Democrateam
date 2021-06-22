const Home = window.httpVueLoader('./components/Home.vue')
const ListeElections = window.httpVueLoader('./components/ListeElections.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const CreerElection = window.httpVueLoader('./components/CreerElection.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const PageElection = window.httpVueLoader('./components/PageElection.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/listeElections', component: ListeElections },
  { path: '/contact', component: Contact },
  { path: '/creerElection', component: CreerElection },
  { path: '/login', component: Login },
  { path: '/pageElection', component: PageElection },
  { path: '/profil', component: Profil },
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    user: {}
  },
  async mounted () {

  },
  methods: {
  }
})
