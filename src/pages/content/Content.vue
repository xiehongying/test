<template>
    <el-container class="maincontainer">
        <el-header>
            <mheader></mheader>
        </el-header>
        <el-container>
            <el-aside width="200px"><maside></maside></el-aside>
            <el-container>
            <el-main>
            <div class="main-body">
                <router-view></router-view>
            </div>
            </el-main>
            <el-footer><mfoot></mfoot></el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import mheader from "@/components/header.vue"
import maside from "@/components/aside.vue"
import mfoot from "@/components/foot.vue"
export default{
    components:{
        mheader,
        maside,
        mfoot
    }
}
</script>
<style lang="less">
.maincontainer{
    height:100% !important;
}
.el-main{
    background:#f0f2f5;
    padding:0 15px !important;
}
</style>