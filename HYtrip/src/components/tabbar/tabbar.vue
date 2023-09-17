<template>
  <div class="tabbar">
   <template v-for="(item,index) in tabbar" :key="index">
    <div class="tabbar_item" :class="{active:currentindex==index}" 
        @click="tabbar_btn(index,item)"
    >
        <img v-if="currentindex!=index" :src="getURL(item.img)" alt="">
        <img v-else :src="getURL(item.imgactive)" alt="">
        <span class="text">{{ item.text }}</span>
    </div>
    </template>
  </div>
</template>


<script setup>
    import { useRouter } from "vue-router";
    import { ref } from "vue"
    import tabbar from "../../assets/data/tabbar"
    const currentindex=ref(0)
    const router=useRouter()
    const getURL=(img)=>{
        return new URL(`../../assets/img/tabbar/${img}`,import.meta.url).href
    }
    function tabbar_btn(index,item){
        currentindex.value=index
        router.push(item.path)
    }
</script>


<style scoped>
.tabbar{
    height: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
}
.tabbar_item{
    display: flex;
    flex-direction: column;
    flex: 1px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.tabbar_item>img{
    width: 37px;
}
.active{
    color: #ff9854;
}

</style>