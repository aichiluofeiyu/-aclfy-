<template>
<div>
<!-- <tabbar></tabbar> -->
<!-- <tabbar_1  v-if="!route.meta.tabbarchange"></tabbar_1> -->
<Tabbar_1></Tabbar_1>
<RouterView v-slot="props">
<keep-alive include="home">
 <component :is="props.Component"></component>
</keep-alive>
</RouterView>
<LoadingCont></LoadingCont>
</div>

</template>


<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import tabbar from './components/tabbar/tabbar.vue';
import { useRoute } from 'vue-router';
import LoadingCont from './components/loading/LoadingCont.vue';
import Tabbar_1 from './components/tabbar/tabbar_1.vue';
// import tabbar_1 from './components/tabbar/tabbar_1.vue';
// const route=useRoute()
</script>

<style lang="less" scoped>

</style>
