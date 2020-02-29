<template>
    <div class="index-24hour">
        <p class="real-title">24小时水质数据</p>
        <el-row :gutter="15">
            <el-col :span="8">
                <HomeChartLine />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import HomeChartLine from "./HomeLineChart.vue"
export default {
    name: "24hours",
    components: { HomeChartLine },
    data(){
        return{
        
        }
    }    
};
</script>

<style lang="less">
.index-24hour{
    margin-top:20px;
    .real-title{
        height:46px;
        font-size:18px;
        color:#6c6c6c;
        padding:20px 0 0 15px;
    }
    .el-col-8{
        margin-bottom:20px;
    }
}
</style>