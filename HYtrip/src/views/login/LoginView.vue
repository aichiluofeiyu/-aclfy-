<template>
 <div class="logins tabbarhidden">
    <h2>宏源旅途</h2>
    <div class="login">
       
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>
  </div>
    <div class="toregister">
       <span @click="torigister">没有账号？马上注册</span>
    </div>
 </div>
</template>


<script setup>
import { ref } from "vue";
import router from "../../router";
import uselogin from "../../store/moduels/login"
import { showNotify } from 'vant';

import { useRoute } from 'vue-router'
// const router = useRouter();
const route = useRoute();


const loginstore=uselogin()
// const {token}=toRefs(loginstore)
  const username = ref("");
    const password = ref("");
    const tokenvalue=ref({})
    const onSubmit = (values) => {
        tokenvalue.value=values
    //   console.log(loginstore.token.用户名,tokenvalue.value.用户名);
     if(loginstore.token.用户名==tokenvalue.value.用户名
     &&loginstore.token.密码==tokenvalue.value.密码){
       // 1秒后自动关闭
        showNotify({message:'登录成功！',duration:1000});
       setTimeout(() => {
        router.push('/home')
        // router.gettoken=false
        route.meta.islogin=false
        console.log(route);
        // loginstore.getlogin=false
       }, 1000);
       
     }
     else{
        showNotify({message:'账号密码错误！',duration:1000});
     }
    }


    //跳转注册
    const torigister=()=>{
        router.push('/register')
    }
</script>


<style lang="less" scoped>
.logins{
    // display: flex;
    // flex-wrap: wrap;
    background-image: url(../../assets//img//common/bg3.jpg);
    & h2{
        text-align: center; 
      padding-top: 20px;
      font-size: 6.66667vw;
        font-weight: 700;
        color: #ff9854;
    }
    .login{
        
        display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      top: 100px;

    }
    
        .toregister{
            position: relative;
           & span{
            position: relative;
            text-align: center;
            left: 100px;
            right: 0;
            top: 100px;
            bottom: 0;
        color: #ff9854;

           }
        }
    }


</style>