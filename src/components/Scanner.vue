<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <qrcode-reader @decode="onDecode"></qrcode-reader>
        <h3>{{ decodedUrl }}</h3>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
import { QrcodeReader } from 'vue-qrcode-reader'
export default {
  name: 'Scanner',
  components: {
    QrcodeReader
  },
  data () {
    return {
      decodedUrl: ''
    }
  },
  methods: {
    onDecode (decodedString) {
      this.decodedUrl = decodedString
      console.log(decodedString)
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
