<template>
  <div class="content">
    <div class="contentinfo">
        <div class="cover">
            <img :src="itemdata.image.url" alt="">
        </div>
        <div class="infos">
            <div class="infoall">{{ itemdata.summaryText }}</div>
            <div class="housename" >{{ itemdata.houseName }}</div>
            <div class="priceandstar">
                <div class="star"><van-rate :model-value="starnumber" color="#fff" readonly allow-half /></div>
                <div class="price">￥{{ itemdata.finalPrice }}</div>
            </div>
        </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from "vue"


const props= defineProps({
    itemdata:{
        type:Object,
        default:()=>{

        }
    }
})
const starnumber=computed(()=>{
    return Number(props.itemdata.commentScore)
})

</script>


<style lang="less" scoped>
.content{
    display: flex;
    .contentinfo{
        padding: 10px;
        position: relative;
      .cover{
        img{
        width: 167px;
        height: 226px;
        border-radius: 5px;
       }
      } 
      .infos{
        position: absolute;
        bottom: 18px;  
        color: #fff;
        font-size: 12px;
        padding: 8px 10px;
        .housename{
            width: 150px;
            height: 34px;
            margin: 5px;    
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .priceandstar{
            display: flex;
            .price{
               margin:  auto 3px;
            }
        }
    }
    }
}

</style>