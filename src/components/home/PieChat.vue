<template>
    <div>
       <div id="chartPie" style="width: 100%;height:170px;margin-top:-86px;"></div>
    </div>
</template>

<script>
import echarts from "echarts"
export default {
    name: "pie-chart",
    mounted(){
        this.drawPieChart()
    },
    methods:{
        drawPieChart(){
            const option = {                
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },                
                series: [
                    {
                        name: '报警情况',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 200, name: '已阅读',itemStyle:{
                                normal:{
                                    color:"#115b99"
                                }
                            }},                            
                            {value: 250, name: '未阅读',itemStyle:{
                                normal:{color:"#1692f2"}
                            }}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            // 画布初始化
            const charObj = echarts.init(document.getElementById('chartPie'));
            // 使用配置项和参数生成图标
            charObj.setOption(option);
            //自适应屏幕大小
            window.addEvenListener('resize',function(){
                charObj.resize();
            })
        }
    }
};
</script>

<style lang="less">
</style>