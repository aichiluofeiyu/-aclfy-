<template>
    <div class="loading" v-if="loadingstore.isloading">
        <div class="bg">
        <img src="../../assets//img//home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import useloading from '../../store/moduels/loading';

const loadingstore=useloading()
</script>


<style lang="less" scoped>
.loading{
    z-index: 999;
    margin: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: rgba(0, 0, 0,.5);
    align-items: center;
    justify-content: center;
    .bg{
        width: 104px;
        height: 104px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url(../../assets//img//home//loading-bg.png) 0 0 / 100% 100%;

        img{
            width: 70px;
            height: 70px;
            // margin: 15px 0 0 25px;
            margin-bottom: 8px;
        }
    }
}

</style>