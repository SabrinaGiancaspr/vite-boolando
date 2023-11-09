import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faBagShopping, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareYoutube, faSquareTwitter} from '@fortawesome/free-brands-svg-icons'




library.add(faHeart, faUser, faBagShopping, faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareYoutube, faSquareTwitter, faCircleXmark)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')