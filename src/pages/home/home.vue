<template>
 <div>
  <div id="main"></div>
 </div>
</template>


<script>
import * as echarts from "echarts"
import{mapGetters,mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters({
            list:'classify/list'
        })
    },
   components:{
   },
   data() {
   return {

}
   },
   methods:{
       ...mapActions({
           requestCateList:'classify/requestCateList'
       })
   },
 
    mounted(){
        this.requestCateList()
    },
     watch:{
    list:{
        handler(){
           var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: this.list.map(item=>item.catename)
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: this.list.map(item=>item.children?item.children.length:0)
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option); 
        },
        deep:true
    },
     }
}
</script>

<style>
   #main {
      width: 800px;
      height: 300px;
      border: 1px solid #ccc;
   }
</style>