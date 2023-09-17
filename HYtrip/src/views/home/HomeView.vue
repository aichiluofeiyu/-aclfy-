<template>
  <div class="home" @scroll="scrolllistener($event)" ref="homeref"> 
    <div class="title">宏源旅途</div> 
    <div class="banner">
      <img src="../../assets/img/home/banner.webp" alt="">
    </div>
    <SerchBox ></SerchBox>
    <HomeCategories></HomeCategories>

<!-- 搜索 -->
  <SearchTabbar v-if="isshowserch"></SearchTabbar>
    
  
  <HomeList></HomeList>

    
  </div>
</template>


<script setup>
// import usehotSuggests from '../../store/moduels/hotSuggests';
import SearchTabbar from "../../components/tabbar/SearchTabbar.vue";
import {throttle} from "underscore"
import SerchBox from './SerchBox.vue';
const homeliststore=usehomelist()
import usehomelist from '../../store/moduels/homelist';
import HomeList from '../../components/home-list/HomeList.vue';
import HomeCategories from '../../components/home_categories/HomeCategories.vue';
import { onActivated, ref } from 'vue';
//展示热门建议
// const hotSuggestStore=usehotSuggests()
// hotSuggestStore.fetchhotSuggests()

//搜索
const isshowserch=ref(false)
const scrolllistener=throttle((e)=>{
  if(e.srcElement.scrollTop + e.srcElement.offsetHeight+1 >= e.srcElement.scrollHeight){
    console.log("-------------");
    homeliststore.gethomelist()
  }
  if(e.srcElement.scrollTop>=500){
// console.log(e.srcElement.scrollTop);
  isshowserch.value=true
console.log("监听到了滚动");

  }
  else{
isshowserch.value=false

  }
  return e.srcElement.scrollTop
},500)


// function serchshow(e){
//   console.log(e.scrollTop);

//   if(e.srcElement.scrollTop>=100){
//     isshowserch=true
//   }
// }


//保留原来滚动的位置(失败)
// const homeref=ref()
// onActivated((homeref)=>{
//   homeref.srcElement.scrollTop=e.srcElement.scrollTop
//   console.log(homeref.srcElement.scrollTop);
// })



</script>


<style lang="less" scoped>
.home{
  height: 100vh;
  padding-bottom:50px;  
  box-sizing: border-box;
  overflow-y: auto;
  .title{
      margin: 15px auto;
      padding: 0 135px;
      font-size: 25px;
      font-weight:700;
      color: #ff9854;
      
  }
  .banner>img{
    width: 100%;
    display: block;
  }
 
}

</style>