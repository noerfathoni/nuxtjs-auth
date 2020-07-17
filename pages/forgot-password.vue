<template>
  <div class="wrapper">
    <div class="w-11/12 lg:w-6/12 grid grid-row-2 lg:grid-cols-2 mx-auto shadow-xl my-4 md:my-auto">
      <div class="login-box h-full flex items-center">
        <img src="~assets/img/undraw_forgot_password.svg" />
      </div>
      <div class="login-box">
        <h1>Forgot Password</h1>
        <span class="block mb-8">Enter your email and we send you code</span>
        <div>
          <form>
            <div class="form__block">
              <label id="email">Email</label>
              <input type="email" v-model="email" id="email" placeholder="your.email@mail.com">
            </div>
            <button class="button button--fluid button__primary mt-6 mb-4">
              Send Code
            </button>
            <span class="block text-sm mb-8">
              Remember password ?
              <nuxt-link to="/" class="text-purple-500 font-bold">Sign In</nuxt-link>
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
      email: ''
    }
  },
})
</script>
