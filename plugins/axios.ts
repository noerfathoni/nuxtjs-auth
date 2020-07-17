import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

const plugin: Plugin = ({ $axios }, inject) => {
  $axios.setHeader('Accept', 'application/json')
}

export default plugin
