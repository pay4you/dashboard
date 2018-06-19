<template>
    <div class="container login_container">
        <section class="login">
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
            <button class="button is-primary" @click="login">Login</button>
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
                    console.log(this);                    
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
    max-width: 500px;
    margin: 10% auto;
}
</style>
