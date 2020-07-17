<template>
  <div class="wrapper">
    <div class="w-11/12 lg:w-6/12 grid grid-row-2 lg:grid-cols-2 mx-auto shadow-xl my-4 md:my-auto">
      <div class="login-box h-full flex items-center">
        <img src="~assets/img/undraw_sign_in.svg" />
      </div>
      <div class="login-box">
        <h1>Welcome Back</h1>
        <span class="block mb-8">Sign in to start your session</span>
        <div>
          <form>
            <div class="form__block">
              <label id="email">Email</label>
              <input type="email" v-model="email" id="email" placeholder="your.email@mail.com">
            </div>
            <div class="form__block">
              <label id="password">Password</label>
              <input type="password" v-model="password" id="password" placeholder="********">
            </div>
            <nuxt-link
              to="/forgot-password"
              class="flex font-bold underline text-purple-500 text-sm justify-end"
            >
              Forgot Password?
            </nuxt-link>
            <button class="button button--fluid button__primary mt-6 mb-4">
              Sign In
            </button>
            <span class="block text-sm mb-8">
              Don't have an account ?
              <nuxt-link to="/register" class="text-purple-500 font-bold">Register</nuxt-link>
            </span>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  auth: false,
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      await this.$auth
        .loginWith('local', {
          data: {
            username: this.email,
            password: this.password
          }
        })
        .catch((e: any) => {})
    }
  }
})
</script>
