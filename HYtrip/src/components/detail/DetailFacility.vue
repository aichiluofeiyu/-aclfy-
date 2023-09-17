<template>
  <div class="detailhost">
    <DetailSolt title="房屋设施" moretext="全部设施">
       <div class="houseroom">
        <template v-for="(item,index) in facilitydata.houseFacilitys" :key="index">
            <div class="item" v-if="facilitydata.facilitySort?.includes(index)">
                <div class="head">
                    <img :src="item.icon" alt="">
                    <div class="text">{{ item.groupName }}</div>
                </div>
                <div class="list">
                    <template v-for="(iten,indey) in item.facilitys.slice(0,4)" :key="indey" >
                        <div class="iten">
                            <i class="icon icon_check"></i>
                            <span>{{ iten.name }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </template>
       </div>
    </DetailSolt>
  </div>
</template>


<script setup>
import DetailSolt from './DetailSolt.vue';
const props= defineProps({
    facilitydata:{
        type:Object,
        default:()=>({})
    }
})
</script>


<style lang="less" scoped>
.houseroom{
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;
    .item{
        display: flex;
    margin: 25px 0;
    .head{
        width: 90px;
    text-align: center;
    & img{
        width: 20px;
    height: 20px;
    }
    .text{
        margin-top: 5px;
    color: #000;
    }
    }
    .list{
        flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .iten{
        display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 50%;
    margin: 4px 0;
    .icon{
        margin: 0 6px;
    }
    }
    }
    }
}
</style>