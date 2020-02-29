<template>
    <div class="index-situation">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span class="title">设备名称</span>
                        </div>
                        <div class="marginB30">
                            <div class="text-top">
                                <el-row type="flex" class="row-bg" justify="center">
                                    <el-col :span="1"><i class="blue-circle"></i></el-col>
                                    <el-col :span="3" style="text-align:left;"><label style="color:#858585;">连接设备</label></el-col>
                                    <el-col :span="2"><span style="color:rgb(0,153,255);font-size:18px;">10套</span></el-col>
                                </el-row>
                            </div>  
                            <div class="text-bottom">
                                <el-row type="flex" class="row-bg" justify="center">
                                    <el-col :span="1"><i class="deep-blue-circle"></i></el-col>
                                    <el-col :span="3" style="text-align:left;"><label style="color:#858585;">正在运行</label></el-col>
                                    <el-col :span="2"><span style="color:rgb(0,153,255);font-size:18px;">3套</span></el-col>
                                </el-row>
                            </div>                          
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span class="title">传感器情况</span>
                        </div>
                        <div class="marginB30">
                            <div class="text-top">
                                <el-row type="flex" class="row-bg" justify="center">
                                    <el-col :span="1"><i class="blue-circle"></i></el-col>
                                    <el-col :span="5" style="text-align:left;"><label style="color:#858585;">共有传感器套数</label></el-col>
                                    <el-col :span="2"><span style="color:rgb(0,153,255);font-size:18px;">7套</span></el-col>
                                </el-row>
                            </div>  
                            <div class="text-bottom">
                                <el-row type="flex" class="row-bg" justify="center">
                                    <el-col :span="1"><i class="deep-blue-circle"></i></el-col>
                                    <el-col :span="5" style="text-align:left;"><label style="color:#858585;">监测类别</label></el-col>
                                    <el-col :span="2"><span style="color:rgb(0,153,255);font-size:18px;">3套</span></el-col>
                                </el-row>
                            </div>                          
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
         <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span class="title">报警情况</span>
                        </div>
                        <div>
                            <PieChart />                   
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header">
                            <span class="title">今日值班</span>
                        </div>
                        <div>
                            <div class="duty">
                                <p class="name">梁兄</p>
                                <p class="tel">18428368634</p>
                            </div>                     
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import PieChart from './PieChat'
export default {
    name: "24hours",
    components: { PieChart },
    data(){
        return{
        
        }
    }    
};
</script>

<style lang="less">
.index-situation{
    margin:10px 0;
    background:rgb(236,236,236);
    .el-card{
        box-sizing:border-box;
        margin:10px 12px;
        min-width:300px;
        .title{
            font-size:18px;
            color:#666;
        }
        .text-top,.text-bottom{
            white-space: nowrap;
            text-align:center;
            font-size:16px;
        }
        .blue-circle{
            display:inline-block;
            width:10px;
            height:10px;
            border-radius:5px;
            background:#1692f2;
        }
        .deep-blue-circle{
            display:inline-block;
            width:10px;
            height:10px;
            border-radius:5px;
            background:#115b99;
        }
        .duty{
            font-size:24px;
            text-align:center;
            .name{
                color:#0099ff;
            }
            .tel{
                color:rgb(51,102,255);
                margin-top:12px;
            }
        }
    }
    .el-card__header{
        border:0;
    }
    .marginB30{
        margin-bottom:30px;
    }
}
</style>