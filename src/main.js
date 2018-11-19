// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
  apiKey: "AIzaSyCey-KpxjFuYxATIK4ffNahH21TQi4rW6M",
  authDomain: "endchain-scn.firebaseapp.com",
  databaseURL: "https://endchain-scn.firebaseio.com",
  projectId: "endchain-scn"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
