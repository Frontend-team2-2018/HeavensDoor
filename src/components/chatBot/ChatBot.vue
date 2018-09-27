<template>
    <b-container fluid>
      aaaa
    </b-container>
</template>

<script>
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
export default {
  name: 'toilet-bot',
  data () {
    return {
      toiletInfos: []
    }
  },
  created: function () {
    // var that = this
    // let params = new URLSearchParams()

    // axios.get('https://o9q636x114.execute-api.ap-northeast-2.amazonaws.com/toilet/toiletinfos/', params) // => 成功時
    // .then(function (response) {
    //   that.$data.toiletInfos = JSON.parse(response.data.body)
    // })
    // .catch(function (error) { // => 失敗時
    //   console.log("error")
    // })
  },
  methods: {
  }
  
}
</script>