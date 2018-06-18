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
              fetch('http://pay4you-club.umbler.net/v1/users/authenticate', {
                    method: 'post',
                    body: data,
                    mode: 'no-cors'
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log('Request failed', error)
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
