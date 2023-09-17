
<template>
  <div class="categorie ">
    <template v-for="(item,index) in categoriedata " :key="index">
<div class="item">
    <img :src="item.pictureUrl" alt="">
    <div>{{ item.title }}</div>
</div>
  </template>
  </div>
</template>


<script setup>

import { storeToRefs } from 'pinia';
import usecategories from '../../store/moduels/categories';
const categorietstore=usecategories()
const {categoriedata} =storeToRefs(categorietstore)
    categorietstore.fetchcategories()
</script>


<style lang="less" scoped>
.categorie{
    display: flex;
    margin-top: 70px;
    overflow-x: auto;
.item{
width: 70px;
height: 70px;
text-align: center;
flex-shrink: 0;
padding: 0 5px;
font-size: 12px;
&::-webkit-scrollbar {display:none}
    img{
    width: 32px;
    height: 32px;
  }
}
}

</style>