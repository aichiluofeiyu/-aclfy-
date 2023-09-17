<template>
   <div class="serchbox">

    <!-- 我的位置 -->
    <div class="position">
      <span class="position-city" @click="cityclick()">{{ citystore.currentcity.cityName }}</span>
      <div class="position-mywz" @click="positionclick()">
        <span class="position-me">我的位置</span>
      <img src="../../assets//img/home/icon_location.png" alt="">
    </div>
  </div>
  
  <!-- 入住 -->
    <div class="getintip position " @click="show=true" >
      <div class="start  ">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time"> {{ start_time }}</span>
        </div>
      </div>
      <div class="stay start">共{{staycount}}晚</div>
      <div class="end ">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time"> {{ end_time }} </span>
        </div>
      </div>
    </div>

    <!-- <van-cell title="选择日期区间" :value="date" @click="show" /> -->
<van-calendar v-model:show="show" type="range" @confirm="onConfirm" color="#ff9854"  />


    <div class="people">
      <div class="position getintip ">
      <div class="start">价格不限</div>
      <div class="posion">人数不限</div>
    </div>
    </div>

    <!--  关键字/位置/民宿名-->
    <div class="input position">
      <input type="text" placeholder="关键字/位置/民宿名" >
    </div>
   </div>

   <!-- 热门推荐 -->

<div class="hotsuggests position">
 <template v-for="(hotitem,index4) in hotSuggestdata" :key="index4">
  <div class="hotitem">{{ hotitem.tagText.text }}</div>
 </template>
</div>

<!--  搜索 -->
<div class="item search-btn">
  <div class="btn" @click="startSearch()">开始搜索</div>
</div>


</template>


<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import usecity from "../../store/moduels/city";
import {formatmonthday,getDiffDays} from "../../utils/format_dayjs";
import usehotSuggests from "../../store/moduels/hotSuggests";
import { storeToRefs } from "pinia";
import usegettime from "../../store/moduels/timestore";

  const router=useRouter()
  const citystore=usecity()
  
  //定位
const positionclick=()=>{
    navigator.geolocation.getCurrentPosition(res=>{
        console.log(res,"当前位置");
    },err=>{
        console.log(err,"错误信息");
    })
}
const cityclick=()=>{
    router.push("/city")
}

//日期
const timestore=usegettime()
const {starttime,endtime}=storeToRefs(timestore)

const start_time=computed(()=>formatmonthday(starttime.value))
const end_time=computed(()=>formatmonthday(endtime.value))

// console.log(start_time,end_time);
const show=ref(false)
const staycount=ref(getDiffDays(starttime.value,endtime.value))
function onConfirm(value){
  const selectstartdate=value[0]
  const selectenddate=value[1]
// console.log(selectstartdate,selectenddate);

 timestore.starttime=selectstartdate
  timestore.endtime=selectenddate
  // console.log(start_time,end_time);
  staycount.value=getDiffDays(selectstartdate,selectenddate)
  show.value=false

}

//热门建议

const hotSuggestStore=usehotSuggests()
const {hotSuggestdata}=storeToRefs(hotSuggestStore)
hotSuggestStore.fetchhotSuggests()
// console.log(hotSuggestdata.value?.tagCode);


//搜索
function startSearch(){
  console.log("点击");
  router.push({
    path:"/search",
    query:{
      start_time:start_time.value,
      end_time:end_time.value
    }
  })

}


</script>


<style lang="less" scoped>

.position{
    height: 50px;
    display: flex;
    padding: 5px 20px;
      line-height: 50px;
    .position-city{
      flex: 1;
    }
    .position-mywz{
      font-size: 12px;
      color: #999;
    }
    img{
      width: auto;
      height: 20px;
     padding: 13px 2px;
    }
  }
  .getintip{
display: flex;
    .tip{
      font-size: 12px;
      color: #666;
      position: relative;
      bottom: 20px;
    }
    .end{
      .date{
        // position: relative;
        .time{
     position: relative;
     right: 30px;
       
      }
      }
    }
    .start{
      flex: 1;
      .date{
        position: relative;
        .time{
       position: absolute;
       left: 0;
       
      }
      }
   
    }
    .posion{
      position: relative;
      right: 30px;
    }
    
  }
  .people{
      color: #666;
      font-size: 14px;
      position: relative;
      bottom: 20px;
    }
    .input{
      color: #999;
    font-size: 14px;
    position: relative;
    bottom: 30px;
    }

    //hotsuggest
    .hotsuggests{
      // display: flex;
      justify-content: center;
      flex-wrap: wrap;
      font-size: 12px;
      position: relative;
      bottom: 30px;
      line-height: 20px;
      .hotitem{
        // border: 1px solid #666;
        border-radius: 5px;
        height: 20px;
        margin: 5px;
        color: #3f4954;
        background-color: #f1f3f5;
      }
    }

    .search-btn {
      position: relative;
  .btn {
    width: 342px;
    position: absolute;
    top: 15px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(
      --tjc-theme-linear-gradient,
      linear-gradient(90deg, #fa8c1d, #fcaf3f)
    );
  }
}.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
}
</style>