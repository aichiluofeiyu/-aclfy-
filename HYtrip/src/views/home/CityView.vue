<template>
  <div class="city tabbarhidden">
    <div class="top">
      <van-search v-model="value"
     show-action shape="round" 
     @cancel="searchback()"   placeholder="城市/区域/位置" />
     <van-tabs v-model:active="active" color="#ff9854">
        <template v-for="(value,key) in citydata" :key="key">
         <van-tab :title="value.title" :name="key"></van-tab>
        </template>
    </van-tabs>
    </div>
    <div class="citylist">
      <div class="hotcities">
        <div class="hot">热门</div>
        <div class="list">
         <template v-for="(city,index2) in currengrup?.hotCities" :key="index2">
          <div class="hotcity" @click="selecthot(city)" >{{ city.cityName }}</div>
          
        </template>
        </div>
      </div>
      <div  class="cityitem">
        <van-index-bar :index-list="currengrup?.cities?.map(item => item.group)">
          <template v-for="(item,index) in currengrup?.cities" :key="index">
            <van-index-anchor :index="item.group" />
            <template v-for="(item1,index1) in item?.cities" :key="index1">
              <van-cell :title="item1.cityName" @click="selectIten(item1)" />
            </template>
          </template>
        </van-index-bar>

      </div>
    </div>
  </div>

</template>


<script setup>

import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import usecity from "../../store/moduels/city"

const router =useRouter()
const value=ref()
const active=ref()

//调用store的fetchAllCityData
const citystore=usecity()
const {citydata}=storeToRefs(citystore)
citystore.fetchAllCityData()

const currengrup=computed(()=>{
return  citydata.value[active.value]
})

//将城市返回给currentcity
function selectIten(item1){
  // console.log(item1.cityName);
  citystore.currentcity=item1;
  router.back()
}

//热门城市
function selecthot(city){
  console.log(city.cityName);
  citystore.currentcity=city;
  router.back()
}

//返回
function searchback(){
router.back()
}

</script>


<style lang="less" scoped>
.city{
.top{
  z-index: 9;
  position: relative;
}
  .citylist{
    position: absolute;
    top: 104px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    .hotcities{
      font-size: 12px;
    .hot{
        padding-left: 15px;
        padding-bottom: 10px;
      font-size: 14px;

          }
      .list{
        display: flex;
      flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
          .hotcity{
            width: 70px;
        height: 28px;
        color: #000;
        background-color: #fff4ec;
        margin: 6px 0;
        text-align: center;
        border-radius: 10px;
        line-height: 28px;
          }
      }
    }
  }
}

</style>