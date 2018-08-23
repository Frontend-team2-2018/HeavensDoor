<template>
    <b-container fluid>
      <b-row class="">
        <b-col lg="3" md="4" sm="6" v-for="(toiletInfo,index) in toiletInfos" :key="toiletInfos.storey">
          <b-row class="storeyBlock">
            <b-col cols="4" ><label class="storey">{{toiletInfo.storey}}F</label></b-col>
            <b-col cols="4"  v-for="(item,index) in toiletInfo.roomInfos">
              <b-row class="">
                <b-col cols="12" >
                  <label>
                    <p v-if="item.status"><img src="../img/opened.png"/></p>
                    <p v-else><img src="../img/closed.png"/></p>
                  </label>
                </b-col>
                <b-col cols="12" >
                  {{ item.time }}
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
export default {
  name: 'toilet-status',
  data () {
    return {
      toiletInfos: []
    }
  },
  created: function () {
    var that = this
    let params = new URLSearchParams()

    axios.get('https://o9q636x114.execute-api.ap-northeast-2.amazonaws.com/toilet/toiletinfos/', params) // => 成功時
    .then(function (response) {
      that.$data.toiletInfos = JSON.parse(response.data.body)
    })
    .catch(function (error) { // => 失敗時
      console.log("error")
    })
  },
  methods: {
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
img {
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.storey {

  font-size: 3em;
  max-width: 100%;
  max-height: 100%;
}
</style>
