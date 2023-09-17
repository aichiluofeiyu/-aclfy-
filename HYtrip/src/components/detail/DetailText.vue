<template>
  <div class="detailtext">
<div class="intro">
  <h2 class="title">{{ textdata.title }}</h2>
  <div class="content">{{ textdata.introduction }}</div>
</div>
  </div>
</template>


<script setup>
defineProps({
  textdata:{
    type:Object,
    default:()=>({})
  }
})

</script>


<style lang="less" scoped>
.intro{
  padding: 4.26667vw 3.2vw;
    border-top: 1.33333vw solid #f2f3f4;
    .title{
      font-size: 3.73333vw;
    color: #000;
    font-weight: 700;   
    }
    .content{
      margin-top: 2.66667vw;
    font-size: 3.2vw;
    line-height: 1.5;
    color: #666;
    }
}

</style>