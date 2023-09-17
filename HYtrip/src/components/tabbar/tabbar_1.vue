<template>
  <div class="tabbar_item">
    <van-tabbar fixed v-model="active" active-color="#ff9854" route>
    <template v-for="(item,index) in tabbardata" :key="index">
        <van-tabbar-item :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon>
        <img v-if="active!=index" :src="getURL(item.img)" />
        <img v-else :src="getURL(item.imgactive)" />
        </template>
  </van-tabbar-item>
    </template>
</van-tabbar>
  </div>
</template>


<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import tabbardata from "../../assets/data/tabbar";
const active=ref(0)
const getURL=(img)=>{
        return new URL(`../../assets/img/tabbar/${img}`,import.meta.url).href
    }
//解决路由切换的bug 根据对应的path设置index和active相等(图片的切换)
const route=useRoute()
watch(route,(newroute)=>{
  const index=tabbardata.findIndex(item=>item.path==newroute.path)
  if(index==-1) return 
  active.value=index
})
</script>


<style lang="less" scoped>

:deep(.van-tabbar-item) {
  font-size: 14px;
}
img{
  height: 25px;
}

</style>