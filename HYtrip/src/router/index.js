import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
// import SearchView from '../views/search/SearchView.vue'
// import useloading from '../store/moduels/loading'
import uselogin from '../store/moduels/login'
import { ref } from 'vue'

// let islogin=
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      // name: 'home',
      redirect:'/home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      // redirect:'/home',
      component: HomeView
    },
    {
      path: '/favor',
      name: 'favor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/favor/FavorView.vue'),
      meta:{
        // islogin:true,
       
      }
    },
    {
      path:'/message',
      name:'message',
      component:()=>import('../views/message/MessageView.vue'),
      meta:{
        islogin:true,

      }
    },
    {
      path:'/order',
      name:'order',
      component:()=>import('../views/order/OrderView.vue'),
      meta:{
        // islogin:true,

      }
    },
    {
      path:'/city',
      name:'city',
      component:()=>import('../views/home/CityView.vue'),
      meta:{
        // tabbarchange:true
        // gettoken:true
      }
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('../views/search/SearchView.vue'),
      meta:{
        // tabbarchange:true
        // gettoken:true

      }
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:()=>import('../views/detail/DetailView.vue'),
      meta:{
        // gettoken:true
      }
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/login/LoginView.vue'),
      meta:{
        login:true
      }
    }, 
    {
      path:'/register',
      name:'register',
      component:()=>import('../views/login/RegisterView.vue'),
      meta:{
        login:true
      }
    },
   
  ],
 

})

//验证登录
router.beforeEach ((to, from, next) =>{
  const loginstore=uselogin()
  let islogin =ref(loginstore.getlogin)
  // ...
    if(to.meta.islogin){// 判断该路由是否需要登录权限
      console.log("验证是否有token",islogin);
      if(!islogin){
        //有token
        next()
      }
      else{//没有token跳转登录
        next({
          path:'/login'
        })

      }
    }
    else{
      return next()
    }
   
  })


export default router
