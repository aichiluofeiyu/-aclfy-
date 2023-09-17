<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <template v-for="(item,index) in bannerdata" :key="index">
            <van-swipe-item><img :src="item.url" alt=""></van-swipe-item>
        </template>
         <template #indicator="{ active }">
          <div class="custom-indicator">
          <template v-for="(value,index,key) in bannergroup" :key="key">
            
            <span :class="{active:bannerdatalist[active]?.enumPictureCategory==key }">
            <span class="text">
              {{ getname(value[0].title) }} 
            </span>
            <span class="count" v-if="bannerdatalist[active]?.enumPictureCategory==key">
             {{ getarrayindex(bannerdata[active]) }} / {{ value.length }}
            </span>
            </span>
          </template>
          </div>
           <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
         </template>
</van-swipe>
  </div>
</template>

<script setup>

const props=defineProps({
    bannerdata:{
        type:Array,
        default:()=>[]
    }
})

const bannergroup={}
const bannerdatalist=props.bannerdata
// console.log(bannerdatalist[0].enumPictureCategory);
for(const item of bannerdatalist){
bannergroup[item.enumPictureCategory]=[]
}
for(const item of bannerdatalist){
  const valueArray=bannergroup[item.enumPictureCategory]
  valueArray.push(item)
}
console.log(bannergroup);

const getname=(name)=>{
  return name.replace("：","").replace("【","") .replace("】","") 
}

const getarrayindex=(item)=>{
const valueArray=bannergroup[item.enumPictureCategory]
return valueArray.findIndex((data)=>{
  data==item
})+1
}
</script>


<style lang="less" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
.banner{
    img{
width: 100%;
    }
    .custom-indicator {
      position: absolute;
    right: 5px;
    bottom:5px;
    display: flex;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0,0,0,.8);
  }
}
.active{
  background-color: #fff;
  color: black;
  border-radius: 1px;
  margin: 0 3px;
}
</style>