<template>
    <div class="index">
        <div class="index-header">
            <i class="el-icon-service"></i>
            <div class="center">
            <marquee onMouseOut="this.start()" onMouseOver="this.stop()">onMouseOut="this.start()" ：用来设置鼠标移出该区域时继续滚动 onMouseOver="this.stop()"：用来设置鼠标移入该区域时停止滚动</marquee>
            </div>            
            <router-link to="/content/logs" class="details">详情</router-link>
        </div> 
        <Situation />    
        <RealTime />   
        <Hours />
    </div>
</template>

<script>
import Situation from '@/components/home/Situation.vue'
import RealTime from '@/components/home/WaterRealTime.vue'
import Hours from '@/components/home/24hours.vue'
    export default {
    name: "Home",
    components: {Situation,RealTime,Hours},
    data(){
        return{
        
        }
    }    
    };
</script>

<style lang="less">
    .index{
        .index-header{
            background:#fff;
            height:50px;
            line-height:50px;
            display:flex;
            i{
                flex:0 0 100px;
                font-size:26px;
                line-height:50px;
                padding-left:18px;
            }
            .center{
                flex-grow:1;
                text-align:center;
                font-size:16px;
                color:#f00; 
            }
            .details{
                flex:0 0 100px;
                font-size:14px;
                text-align:right;
                padding-right:18px;
                color:#108ee9;
            }
        }
        
    }
</style>