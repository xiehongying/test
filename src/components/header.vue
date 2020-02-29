<template>
  <div class="home-header"> 
    <div class="home-header-logo">
      <img src="@/assets/images/logo.png" alt="logo"/>
    </div>
    <div class="home-header-title">
      <h3>水质监测及循环水智能控制系统</h3>
    </div>
    <div class="home-header-right">头像</div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="less">
.home-header{
  overflow:hidden;
  line-height:55px;
  .home-header-logo{
    float:left;
    margin-left:50px;
    img{
      width:114px;
      height:35px;
      vertical-align:middle;
    }
  }
  .home-header-title{
    float:left;
    margin-left:40px;
    font-size:20px;
    color:#0499d9;
    h3{
      // margin:0;
    }
  }
  .home-header-right {
    float: right;
    margin-top: 9px;
    padding-right: 10px;
    img {
      width: 40px;
      margin-right: 20px;
    }
  }
}
</style>
