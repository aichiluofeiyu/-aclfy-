<template>
    <div class="content1">
      <div class="contentinfo">
          <div class="cover">
              <img :src="itemdata?.image?.url" alt="">
          </div>
          <div class="infos">
            <div class="location">
                <van-icon name="location-o" />
                <span class="ip">{{ itemdata.location }} </span>
            </div>
              <div class="housename" >{{ itemdata.houseName }}</div>
              <div class="infoall">{{ itemdata.summaryText }}</div>
               <div class="pricefinal">
                <div class="price">￥{{ itemdata.finalPrice }}</div>
                <div class="pre_price">￥{{ itemdata.productPrice }}</div>
                <div class="cut">{{ itemdata?.priceTipBadge?.text }}</div>
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
  .content1{
    display: flex;
    .contentinfo{
        padding: 8px;
        .cover{
        img{
        width: 168px;
        height: 113px;
        border-radius: 5px;
       }
     
      } 
      .infos{
        width: 170px;
        height: 121px;
        // margin: 5px;
        font-size: 14px;
        .location{
            margin: 8px;
            font-size: 12px;
            color: #666;
        }
        .housename{
            margin-left: 13px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            
        }
        .infoall{
            margin-left: 8px;
            margin-top: 5px;
            font-size: 12px;
            color: #666;
        }
        .pricefinal{
            display: flex;
            margin: 8px;
            .price{
                color: #ff9854;
                font-size: 14px;
            }
            .pre_price{
                margin: 0 3px;
                font-size: 12px;
                color: #999999;
            }
            .cut{
                background-image: linear-gradient(270deg,#f66,#ff9f9f);
                color: #fff;
                padding: 1px 6px;
                font-size: 12px;
                border-radius:5px ;
                }
        }
       }
    }
  }
  
  </style>