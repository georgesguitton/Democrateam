<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div class="container-fluid">
      <div>
        <h3>Elections auxquelles vous pouvez vous inscrire à distance</h3>
        <div class="row">
          <div class="col-lg-4 col-12 mb-3">
            <div class="hover hover-2 text-white rounded">
              <img src="../images/Box.png" alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-2-content px-5 py-4">
                <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                  <span class="font-weight-light">Image </span>Caption
                </h3>
                <p class="hover-2-description text-uppercase mb-0">
                  Lorem ipsum dolor sit amet, consectetur <br />adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-3">
            <div class="hover hover-2 text-white rounded">
              <img src="../images/Box.png" alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-2-content px-5 py-4">
                <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                  <span class="font-weight-light">Image </span>Caption
                </h3>
                <p class="hover-2-description text-uppercase mb-0">
                  Lorem ipsum dolor sit amet, consectetur <br />adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-3">
            <div class="hover hover-2 text-white rounded">
              <img src="../images/Box.png" alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-2-content px-5 py-4">
                <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                  <span class="font-weight-light">Image </span>Caption
                </h3>
                <p class="hover-2-description text-uppercase mb-0">
                  Lorem ipsum dolor sit amet, consectetur <br />adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-3">
            <div class="hover hover-2 text-white rounded">
              <img src="../images/Box.png" alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-2-content px-5 py-4">
                <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                  <span class="font-weight-light">Image </span>Caption
                </h3>
                <p class="hover-2-description text-uppercase mb-0">
                  Lorem ipsum dolor sit amet, consectetur <br />adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Elections auxquelles vous pouvez participer</h3>
        <div class="row">
          <div v-for="election in elections" :key="election.idElection"
            class="col-lg-4 col-12 mb-3" @click="afficherElection(election.idElection)"
          >
            <div class="hover hover-2 text-white rounded">
              <img src="../images/Box.png" alt="" />
              <div class="hover-overlay"></div>
              <div class="hover-2-content px-5 py-4">
                <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                  {{ election.titre }}
                </h3>
                <p class="hover-2-description text-uppercase mb-0">
                  {{ election.description }}
                </p>
              </div>
            </div>
          </div>
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
    elections: { type: Array, default: [] },
  },
  data() {
    return {};
  },
  async mounted () {
    this.$emit('get-elections')
  },
  methods: {
    logIn() {
      this.$emit("log-in", this.user);
    },
    logOut() {
      this.$emit("log-out");
    },
    afficherElection(id) {
      this.$emit("get-election", id);
    },
  },
};
</script>
