// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueQrcodeReader from 'vue-qrcode-reader'

Vue.use(Vuetify)

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCey-KpxjFuYxATIK4ffNahH21TQi4rW6M",
  authDomain: "endchain-scn.firebaseapp.com",
  databaseURL: "https://endchain-scn.firebaseio.com",
  projectId: "endchain-scn",
  storageBucket: "endchain-scn.appspot.com",
  messagingSenderId: "383848789308"
};

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueQrcodeReader)
