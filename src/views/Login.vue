<template>
    <div class="login_container">
        <section class="login">
            <div class="box">
                <img src="../assets/logo.png" alt="Pay4You" class="logo">
                <b-field label="Email">
                    <b-input type="email"
                        v-model="body.email" ref="email">
                    </b-input>
                </b-field>

                <b-field label="Senha">
                    <b-input type="password"
                        v-model="body.password"
                        password-reveal ref="password">
                    </b-input>
                </b-field>
                <button class="button is-success is-rounded" @click="login">Login</button>
            </div>
        </section>
    </div>
</template>
<script>
/* eslint-disable */
import Cookies from 'js-cookie'
import http from '../config/http'

export default {
  name: 'Login',
  data() {
      return {
          body: {
              email: null,
              password: null
          }
      }
  },
  methods: {
      login() {
          let data = this.body
          if((this.body.email != null && this.body.email != null) && (this.$refs.email.checkHtml5Validity() && this.$refs.password.checkHtml5Validity())) {   
              http.post('/users/authenticate', data)
                .then((response) => {
                    Cookies.set('pay_auth', response.data.token)
                    this.$router.push({name: 'orders'})
                })
                .catch((error)  => {
                    console.log(error);
                });           
          }
      }
  }
}
</script>
<style>
.login {
    display: block;
    max-width: 300px;
    margin: 10% auto;
}
.logo {
    display: block;
    margin: 1em auto;
    width:75px;
    height: auto;
}
</style>
