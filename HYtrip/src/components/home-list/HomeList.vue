<template>
    <div class="homelist">
    <div class="title">
        <h2>热门精选</h2>
    </div>
    <div class="content">
        <template v-for="(item,index) in homelistdata" :key="index">
            <HomeContentVue :itemdata="item.data" v-if="item.discoveryContentType==9" @click="itemclick(item.data)"></HomeContentVue>
            <HomeContent1Vue :itemdata="item.data" v-else-if="item.discoveryContentType==3" @click="itemclick(item.data)"></HomeContent1Vue>
        </template>
    </div>

  </div>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import usehomelist from '../../store/moduels/homelist';
import HomeContentVue from './HomeContent.vue';
import HomeContent1Vue from './HomeContent.1.vue';
import { useRouter } from 'vue-router';
const homeliststore=usehomelist()
const {homelistdata}=storeToRefs(homeliststore)
homeliststore.gethomelist()

const router=useRouter()
const itemclick=(itemdata)=>{
    console.log("点击了item",itemdata.houseId);
    router.push('/detail/'+ itemdata.houseId)
}

</script>


<style lang="less" scoped>
.homelist{
    .title{
        font-size: 15px;
        padding: 0 20px;
    }
    .content{
        display: flex;
        flex-wrap: wrap;
    }
  
}

</style>