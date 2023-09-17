<template>
  <div class="houseinfos">
    <div class="housename">{{ infosdata.houseName }} </div>
    <div class="tags">
      <template v-for="(item,index) in infosdata.houseTags" :key="index">
        <span class="item">
          {{ item.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="host">
      <div class="left">
        <span class="score">{{ infosdata.commentBrief?.overall }}</span>
        <span class="title"> {{ infosdata.commentBrief?.scoreTitle }}</span>
        <span class="export">{{ infosdata.commentBrief?.commentBrief }}</span>
      </div>
      <div class="right">
        <span>{{ infosdata.commentBrief?.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="position host">
      <div class="left address">{{ infosdata.nearByPosition?.address }}</div>
      <div class="right">
        <span> 地图·周边 </span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>


<script setup>
const props=defineProps({
  infosdata:{
    type:Object,
    default:()=>({})
  }
})
</script>


<style lang="less" scoped>
.houseinfos{
  padding: 16px;
    background-color: #fff;
    .housename{
      font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
    }
    .tags{
      margin: 10px 0;
      .item{
        font-size: 12px;
    margin: 0 2px;
    padding: 1px 3px;
      }
    }
    .host{
      display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;
    .left{
      .score{
        font-size: 18px;
    font-weight: 700;
    color: #333;
      }
      .title{
        color: #333;
    font-weight: 700;
    margin: 0 3px;
      }
      .export{
        color: #666;
      }
    }
    
    }

  .position {
    .address{
      font-size: 14px;
    font-weight: 700;
    color: #333;
    }
  }
    .right{
      color: #ff9854;
    }
}

</style>