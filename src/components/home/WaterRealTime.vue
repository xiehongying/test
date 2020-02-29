<template>
    <div class="index-real-time">
        <p class="real-title">水质实时数据</p>
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="real-header-left">亲鱼培育车间-进水口</span>
                        <span class="real-header-right">酸碱度</span>                        
                    </div>
                    <div class="real-body">
                        7.72
                    </div>
                </el-card>
            </el-col>     
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="real-header-left">亲鱼培育车间-进水口</span>
                        <span class="real-header-right">酸碱度</span>                        
                    </div>
                    <div class="real-body">
                        7.72
                    </div>
                </el-card>
            </el-col> 
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="real-header-left">亲鱼培育车间-进水口</span>
                        <span class="real-header-right">酸碱度</span>                        
                    </div>
                    <div class="real-body">
                        7.72
                    </div>
                </el-card>
            </el-col> 
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="real-header-left">亲鱼培育车间-进水口</span>
                        <span class="real-header-right">酸碱度</span>                        
                    </div>
                    <div class="real-body">
                        7.72
                    </div>
                </el-card>
            </el-col> 
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="real-header-left">亲鱼培育车间-进水口</span>
                        <span class="real-header-right">酸碱度</span>                        
                    </div>
                    <div class="real-body">
                        7.72
                    </div>
                </el-card>
            </el-col> 
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="real-header-left">亲鱼培育车间-进水口</span>
                        <span class="real-header-right">酸碱度</span>                        
                    </div>
                    <div class="real-body">
                        7.72
                    </div>
                </el-card>
            </el-col> 

        </el-row>
    </div>
</template>

<script>
export default {
    name: "realTime",
     
};
</script>

<style lang="less">
.index-real-time{
    margin-top:20px;
    background:rgb(236,236,236);
    padding:0 10px;
    .real-title{
        font-size:18px;
        height:46px;
        padding:20px 0 0 15px;
        color:#6c6c6c;
    }
    .el-card{
        margin-bottom:10px;
        .real-header-left{
            color:#6c6c6c;
        }
        .real-header-right{
            float:right;
            color:#6c6c6c;
        }
        .real-body{
            height:82px;
            line-height:82px;
            font-size:x-large;
            color:#09f;
            text-align:center;
        }
    }
}

</style>