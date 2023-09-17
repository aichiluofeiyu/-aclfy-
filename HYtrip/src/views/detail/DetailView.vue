<template>
  <div class="detail tabbarhidden" @scroll="tabsscroll($event)">
   <div class="navbar" name="描述">
        <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"/>
      </div>

      <!-- <div class="tabs" v-if="tabscontrol" >
    <van-tabs v-model:active="active" scrollspy sticky  @click-tab="onClickTab">
    <van-tab v-for="item in titlelist" :title="item" :key="item"></van-tab>
</van-tabs>
  </div> -->

   <div class="swipe" v-if="detaildata.mainPart">
    <DetailBanner :bannerdata="detaildata?.mainPart?.topModule?.housePicture?.housePics"></DetailBanner>
   </div>
   <div class="infos" >
    <HouseInfos :infosdata="detaildata?.mainPart?.topModule"></HouseInfos>
   </div>
   <div class="housefitly" name="设施">
    <DetailFacility :facilitydata="detaildata?.mainPart?.dynamicModule?.facilityModule?.houseFacility"></DetailFacility>
   </div>
   <div class="hostintrduce"  name="房东" ref="hostref">
    <DetailIntrduce :intrducedata="detaildata?.mainPart?.dynamicModule?.landlordModule"></DetailIntrduce>
   </div>
   <div class="hotexports" name="评论">
    <DetailHotexport :hotexportdata="detaildata?.mainPart?.dynamicModule?.commentModule"></DetailHotexport>
  </div>
  <div class="detailknowns" name="须知">
    <DetailKnown :knowndata="detaildata?.mainPart?.dynamicModule?.rulesModule"></DetailKnown>
  </div>
  <div class="positions" name="周边">
    <DetailPosition :positiondata="detaildata?.mainPart?.dynamicModule?.positionModule"></DetailPosition>
  </div>
  <div class="detailtext">
    <DetailText :textdata="detaildata?.mainPart?.introductionModule"></DetailText>
  </div>
  <div class="footer">
    <FooterLogo></FooterLogo>
  </div>
  <!-- <div class="tab" v-if="tabscontrol">
    <DetailTab></DetailTab>
  </div> -->
  </div>
</template>


<script setup>
import { useRoute } from "vue-router";
// import DetailTab from "../../components/detail/DetailTab.vue";
import FooterLogo from "../../components/detail/FooterLogo.vue";
import DetailText from "../../components/detail/DetailText.vue"
import DetailPosition from "../../components/detail/DetailPosition.vue";
import DetailKnown from "../../components/detail/DetailKnown.vue";
import DetailHotexport from "../../components/detail/DetailHotexport.vue";
import DetailIntrduce from "../../components/detail/DetailIntrduce.vue";
import DetailFacility from "../../components/detail/DetailFacility.vue";
import HouseInfos from "../../components/detail/HouseInfos.vue";
import DetailBanner from "../../components/detail/DetailBanner.vue"
import router from "../../router";
import usedeatil from "../../store/moduels/detail";
import {throttle} from "underscore"
// import getdetail from "../../service/modules/detail"
import {  ref } from "vue";
import { storeToRefs } from "pinia";
// import axios from "axios";
//router返回主页
const route=useRoute()
// console.log(route.params.id);
const onClickLeft=()=>{
    router.back()
}


//pinia+二次封装axios
const detailstore=usedeatil()
const {detaildata}=storeToRefs(detailstore)
detailstore.getdetaildata(route.params.id)

//原生axios
// axios.get("http://123.207.32.32:1888/api/detail/infos",{
//     params:{
//         houseId:44173741
//     }
// }).then(res=>{
//     console.log(res.data);
// })


//tabs的控制
const tabscontrol=ref(false)
const tabsscroll=throttle((e)=>{
  if(e.srcElement.scrollTop>=500){
// console.log(e.srcElement.scrollTop);
tabscontrol.value=true
// console.log("监听到了滚动111111");
}
else{
tabscontrol.value=false
}
},500) 


//滚动到指定位置

// const titlelist=['描述','设施','房东','评论','须知','周边']
// const hostref=ref()
// const onClickTab=(e)=>{
// console.log("点击了",e.title);
// console.log(e);
// if(e.title=="设施"){
// e.scrollTo(0,100)
// console.log(hostref.value.//offsetParent：获取带有定位的最近父元素
// offsetTop);
// window.scrollTo(0,913)
// }
//  activeName = ref(title)
// }

</script>


<style lang="less" scoped>
// .housefitly{}
.tabs{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
   z-index: 9; 
}
</style>