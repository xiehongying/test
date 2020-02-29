<template>
  <div class="nav"> 
    <el-menu class="el-menu-vertical-demo" :router="true">      
      <el-menu-item v-for="(item) in navs" :key="item.id" :index="item.route">
        <i :class="item.iconfont"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>      
    </el-menu>
  </div>
</template>

<script>

export default {
  data(){
    return{
      navs:[
        {
          id:0,
          name:"首页",          
          iconfont:"el-icon-s-home",
          route:"/content"
        },
        {
          id:1,
          name:"监控视频",
          iconfont:"el-icon-video-camera",
          route:"/content/monitorVideo"
        },
        {
          id:2,
          name:"设备运行状态",
          iconfont:"el-icon-s-order",
          route:"/content/deviceStatus"
        },{
          id:3,
          name:"设备运行控制",
          iconfont:"el-icon-s-order",
          route:"/content/deviceControl"
        },
        {
          id:4,
          name:"监测数据",
          iconfont:"el-icon-odometer",
          route:"/content/monitorData"
        },
        {
          id:5,
          name:"阈值设置",
          iconfont:"el-icon-receiving",
          route:"/content/thresholdSetting"
        },
        {
          id:6,
          name:"监测数据查询",
          iconfont:"el-icon-s-data",
          route:"/content/monitorDataQuery"
        },
        {
          id:7,
          name:"值班人员设置",
          iconfont:"el-icon-s-custom",
          route:"/content/operatorSetting"
        },
        {
          name: "日志",
          id: "8",
          route: "/content/logs",
          iconfont: "el-icon-notebook-2"
        }
      ]
    }
  },
   methods: {
     
    }
};
</script>

<style lang="less">
.nav{
  .el-menu{
    border:0;
    .el-menu-item.is-active{
      border-right:3px solid #0499d9;
    }
  }
}
</style>
