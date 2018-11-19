<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="EndChain" class="mb-5">
        <qrcode-reader @decode="onDecode"></qrcode-reader>
        <div v-show="false">
          <quagga-scanner :v-show="false" :onDetected="logIt" :readerSize="readerSize" :readerType="'ean_reader'"></quagga-scanner>
        </div>

        <v-dialog
            v-model="dialog"
            width="500"
          >

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                Successful scan
              </v-card-title>
              <v-layout column align-center>
                <img src="@/assets/checkmark.gif" alt="EndChain" height="100px">
              </v-layout>

              <v-card-text>
                The following codes have been processed:
                </br>
                <h4>QR Code : {{ decodedUrl }}</h4>
                <h4>BAR Code: {{ decodedBarcode }}</h4>

              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  flat
                  @click="dialog = false"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-layout>
    </v-slide-y-transition>
  </v-container>


</template>


<script>
import { QrcodeReader } from 'vue-qrcode-reader'
import { QuaggaScanner } from 'vue-quaggajs'

export default {
  name: 'Scanner',
  components: {
    QrcodeReader,
    QuaggaScanner
  },
  data () {
    return {
      decodedUrl: '',
      decodedBarcode: '',
      readerSize: {
        width: 640,
        height: 480
      },
      dialog: false
    }
  },
  methods: {
    onDecode (decodedString) {
      this.decodedUrl = decodedString
      this.dialog = true
      console.log(decodedString)
    },
    logIt (data) {
      this.decodedBarcode = data.codeResult.code
      this.dialog = true
      console.log('detected', data)
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
