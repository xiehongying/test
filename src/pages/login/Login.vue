<template>
    <div class="index">
        <div class='header'></div>
        <img class='fish_login' src='../../assets/images/fish_login.png' alt='小鱼哦'/>
        <div class='login'>
            <div class='login-form'>
                <div class='login-form-title'>
                    <p>循环水及水质在线监测系统</p>
                </div>
                <el-form :model="form" ref="from" label-width="80px">
                    <el-form-item>
                        <el-input prefix-icon="el-icon-user" v-model="form.account" @keyup.enter.native="onLogin">
                        </el-input>
                    </el-form-item>     
                     <el-form-item>
                        <el-input prefix-icon="el-icon-goods" v-model="form.password" type='password' @keyup.enter.native="onLogin">
                        </el-input>
                    </el-form-item>                    
                        <el-button type="primary" @click="onLogin" class='login-btn'>登录</el-button>
                </el-form>
            </div>            
        </div>
        <canvasLogin></canvasLogin>
            <div class="foot">
                <p>川5946snw ©2017易科捷（武汉）生态科技有限公司</p>
            </div>
    </div>
</template>

<script>
    import canvasLogin from "../canvasLogin/canvasLogin.vue"
    export default {
        data(){
            return{
                form: {
                    password: '',
                    account: '',
                    checked: true
                },
            }
        },
        conmponents:{
            canvasLogin
        },
        methods:{
            onLogin(){
                // 登录
                console.log(11111)
            }
        }  
    };
</script>

<style lang="less">
    .login{
        width: 325px;
        margin-left: 58%;
        background: #ffffff;
        position: absolute;
        z-index: 3;
        top: 14%;
        -moz-box-shadow: -2px -2px 21x rgba(102, 102, 102, 0.5),
        2px 0px 5px rgba(102, 102, 102, 0.5);
        -webkit-box-shadow: -2px -2px 21px rgba(102, 102, 102, 0.5),
        2px 0px 5px rgba(102, 102, 102, 0.5);
        box-shadow: -2px -2px 21px rgba(102, 102, 102, 0.5),
        2px 0px 5px rgba(102, 102, 102, 0.5);
        .login-form{
            margin:22px;
            padding-top:10px;
            .login-form-title{
                p{
                    margin-bottom:20px;
                    text-align:center;
                    font-size:20px;
                    color:#0591d9;
                    font-weight:600;
                }
            }
            .el-form-item{
                margin:0;
            }
            .el-form-item__content {
                border: 1px solid #d9d9d9;
                border-radius: 4px;
                overflow: hidden;
                margin-left: 0 !important;
                margin-bottom: 40px;
                .el-input__inner {
                    border: 0;
                    outline: 0;
                    background: #f8f8f8;
                }
                }
                .el-checkbox {
                display: block;
                font-size: 14px;
                margin-bottom: 15px;
                }
                .el-checkbox__label {
                color: rgba(0, 0, 0, 0.65);
                }
                .login-btn {
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
    .fish_login {
  position: absolute;
  left: 23.7%;
  top: 30%;
}
.foot {
  text-align: center;
  color: #d2dee4;
  position: absolute;
  bottom: 0px;
  height: 70px;
  background-color: #0591d9;
  width: 100%;
  p {
    width: 100%;
    height: 100%;
    padding-top: 10px;
  }
}
canvas {
  margin-left: -40px;
  position: absolute;
  left: 0;
  top: 0;
}
.header {
  width: 100%;
  height: 70px;
  background: url("../../assets/images/logo.png") 19% 20px no-repeat;
}
</style>