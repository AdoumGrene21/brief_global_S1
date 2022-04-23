<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item" >
      <img src="" width="112" height="28">
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
       <router-link to="/dashboard" class="navbar-item">
        Home
      </router-link>

      <div class="navbar-item">
        <router-link to="/dashboard/eleves" class="navbar-item">
        Eleves
         </router-link>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Voir +
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <template v-if="!$store.state.isAuthenticated">
            <router-link to="/sign-up" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/log-in" class="button is-light">
              Log in
            </router-link>
          </template>

           <template v-else>
            
            <button @click="logout()" class="button is-danger">
              Log Out
            </button>
            <router-link to="/dashboard/my-compte" class="button is-primary">
              <strong>My-compte</strong>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>


<script>
import axios from 'axios'

export default {
    name: 'NavBar',
    methods:{
        async logout(){
            await axios
                .post('/api/v1/token/logout/')
                .then(response => {
                    console.log('logged out')
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.removeItem('token')
            this.$store.commit('removeToken')

            this.$router.push('/')
        }
    }
}
</script>

