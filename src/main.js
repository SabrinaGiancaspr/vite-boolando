import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
 


library.add(faHeart, faUser, faBagShopping)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
