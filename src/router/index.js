import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login/Login.vue'
import Content from '../pages/content/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/24hours',
    name: '24hours',
    component: () => import(/* webpackChunkName: "24hours" */ '../components/home/24hours.vue')
  },
  {
    path:'/content',
    name:'content',
    component:Content,   
    // redirect:'/home',
    children:[
      {
        path:'/',      
        component: () => import(/* webpackChunkName: "home" */ '../pages/home/Home.vue')
      },
      {
        path:'monitorVideo',
        component:()=>import(/* webpackChunkName: "monitorVideo" */ '../pages/monitorVideo/MonitorVideo.vue')
      },
      {
        path:'deviceStatus',
        component:()=>import(/* webpackChunkName: "deviceStatus" */ '../pages/deviceStatus/DeviceStatus.vue')
      },
      {
        path:"deviceControl",
        component:()=>import(/*webpackChunkName:"deviceControl" */ '../pages/deviceControl/DeviceControl.vue')
      },
      {
        path:"monitorData",
        name:"monitorData",
        component:()=>import(/* webpackChunkName:"monitorData" */ '../pages/monitorData/MonitorData.vue')
      },
      {
        path:"thresholdSetting",
        name:"thresholdSetting",
        component:()=>import(/* webpackChunkName:"thresholdSetting" */ '../pages/thresholdSetting/ThresholdSetting.vue')
      },
      {
        path:"monitorDataQuery",
        name:"monitorDataQuery",
        component:()=>import(/* webpackChunkName:"monitorDataQuery" */ '../pages/monitorDataQuery/MonitorDataQuery.vue')
      },
      {
        path:"operatorSetting",
        name:"operatorSetting",
        component:()=>import(/* webpackChunkName:"operatorSetting" */ '../pages/operatorSetting/OperatorSetting.vue')
      },
      {
        path:"logs",
        name:"logs",
        component:()=>import(/* webpackChunkName:"logs" */ '../pages/logs/Logs.vue')
      }
    ]    
  },
  {
    path:'/home',
    name:'home',
    redirect:'/content',
    // component:()=>import(/* webpackChunkName:"home" */ '../pages/home/Home.vue')
  }
]


export default new VueRouter({
  routes
})
