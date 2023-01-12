import Vue from 'vue'
import { Vuelidate } from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: 'AIzaSyBPFpjWRik9Un9Gke-RFq8mL8X3QyzLNDs',
  authDomain: 'vue-crm-e6991.firebaseapp.com',
  projectId: 'vue-crm-e6991',
  storageBucket: 'vue-crm-e6991.appspot.com',
  messagingSenderId: '837567717504',
  appId: '1:837567717504:web:cbbecc39c41a9b2e594665',
  measurementId: 'G-DY7BTL0Y11'
})

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})

