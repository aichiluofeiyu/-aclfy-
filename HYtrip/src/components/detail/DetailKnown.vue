<template>
  <div class="detailknown">
    <DetailSolt title="预订须知" moretext="详情">
        <div class="knowncontent">
            <template v-for="(item,index) in knowndata.orderRules" :key="index">
                <div class="item">
                <span class="title">{{ item.title }}</span>
                <span class="intro">{{ item.introduction }}</span>
            </div>
            </template>
        </div>
    </DetailSolt>
  </div>
</template>


<script setup>
import DetailSolt from './DetailSolt.vue';
defineProps({
    knowndata:{
        type:Object,
        default:()=>({})
    }
})

</script>


<style lang="less" scoped>
.knowncontent{
   .item{
    display: flex;
    margin: 2.66667vw 0 5.33333vw;
    font-size: 3.2vw;
    .title{
        width: 17.06667vw;
    color: #666;
    }
    .intro{
        flex: 1;
    color: #333;
    }
   }
}

</style>