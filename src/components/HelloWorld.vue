<template>
  <div class="hello">
    <v-chart :options="bar" :init-options="initOptions" ref="bar" autoresize></v-chart>
  </div>
</template>

<script>
import 'echarts/lib/chart/bar'
import ECharts from 'vue-echarts'
import getBar from '../data/bar'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    'v-chart':ECharts
  },
  data(){
    return{ 
      bar:getBar(),
      initOptions:{
        renderer: 'canvas'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
