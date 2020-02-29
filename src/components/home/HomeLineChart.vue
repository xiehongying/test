<template>
    <div class="home-chart">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>亲鱼培育车间-出水口</span>
                <sapn style="float:right;">酸碱度</sapn>
            </div>
            <div class="item">
                <div id="main" style="width:100%;height:400px;"></div>
            </div>
        </el-card>
    </div>
</template>

<script>
import echarts from "echarts"
export default {
    name: "home-line-chart",
    data(){
        return{
        
        }
    },
    mounted(){
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label:{
                        backgroundColor:"#6a7985"
                    }
                },
                formatter:function(params){
                    let res=''
                    for(let i=0,l = params.length;i<l;i++){
                        let bgcolor = params[i].color
                        res += '<div style="width:10px;height:10px;border-radius:5px;background:'+bgcolor+';display:inline-block;margin-right:2px;"></div>'
                        +params[i].name +':'+params[i].value;
                    }
                    return res;
                }
            },
            legend: {
                show:true
            },
            grid: {
                left:"3%",
                right:"4%",
                bottom:"3%",
                containLabel:true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,                    
                    data: ['1', '2', '3', '4', '5']
                }                
            ],
            yAxis: [
                {
                    type: 'value',
                    name:"℃"
                }
            ],
            series: [
                {
                    // name: '2015 降水量',
                    type: 'line',
                    smooth: false,
                    data: [1,2,3,4,5,6],
                    itemStyle: {
                        normal: {
                            color: "#0591d9",
                            lineStyle: {
                            color: "#3366ff"
                            }
                        }
                    }
                }
            ]
        };
        const chartObj = echarts.init(document.getElementById('main'));
        chartObj.setOption(option);
        window.addEventListener("resize", function() {
            chartObj.resize();
        });
    }
};
</script>

<style lang="less">
.home-chart{
    .container{
        width:500px;
        height:400px;
    }
    .echart-title{
        padding:4px 20px;
    }
    .el-card__body {
    padding-top: 0;
    padding-bottom: 0;
  }
  canvas {
    left: 5px !important;
    top: -20px !important;
  }
}
</style>