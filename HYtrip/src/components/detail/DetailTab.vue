<template>
  <div class="tabs" >
    <van-tabs v-model:active="active" scrollspy sticky  @click-tab="onClickTab">
    <van-tab v-for="item in titlelist" :title="item" :key="item"></van-tab>
</van-tabs>
  </div>
</template>


<script setup>
import { ref } from "vue";

 const titlelist=['描述','设施','房东','评论','须知','周边']
const onClickTab=(title)=>{
console.log("点击了",title);
if(title=="设施"){
  scrollTop=1500
}
//  activeName = ref(title)

}
</script>


<style lang="less" scoped>
.tabs{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
   z-index: 9; 
}

</style>