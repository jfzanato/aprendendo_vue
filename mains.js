  new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
      .get('https://sandbox-api.lomadee.com/v2/1548274999869d74cbd8d/product/_search?sourceId=35561801&keyword=motorola')
        .then(response => (this.info = response.data.products))
    }
  })
