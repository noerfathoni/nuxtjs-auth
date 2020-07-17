<template>
  <div class="wrapper">
    <div class="login-box">
      <h1>Register</h1>
      <span class="block mb-8">Fill the form and join with us</span>
      <div>
        <form>
          <div class="form__block">
            <label id="fullname">Fullname</label>
            <input type="text" v-model="fullname" id="fullname" placeholder="Enter Fullname">
          </div>
          <div class="form__block">
            <label id="email">Email</label>
            <input type="email" v-model="email" id="email" placeholder="Enter Email">
          </div>
          <div class="form__block">
            <label id="password">Password</label>
            <input type="password" v-model="password" id="password" placeholder="Enter Password">
          </div>
          <div class="form__block">
            <label id="re-enter">Re-Enter Password</label>
            <input type="password" v-model="rePassword" id="re-enter" placeholder="Re-Enter Password">
          </div>
          <button class="button button--fluid button__primary mt-6 mb-4">
            Create Account
          </button>
          <span class="block text-sm mb-8">
            Already have an account ?
            <nuxt-link to="/" class="text-purple-500 font-bold">Sign In</nuxt-link>
          </span>
        </form>
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
      fullname: '',
      email: '',
      password: '',
      rePassword: ''
    }
  }
})
</script>
