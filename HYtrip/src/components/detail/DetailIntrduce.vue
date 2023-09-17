<template>
  <div class="intrduce">
    <DetailSolt title="房东介绍" moretext="房东主页">
        <div class="intro">
            <div class="top"><img :src="intrducedata.topScroll" alt=""></div>
            <div class="header">
                <div class="left">
                    <div class="touxiang"><img :src="intrducedata.hotelLogo" alt=""></div>
                    <div class="info">
                        <div class="name">{{ intrducedata.hotelName }}</div>
                        <div class="tags">
                            <template v-for="(item,index) in intrducedata.hotelTags" :key="index">
                                <div class="item">
                                    <span>{{ item.tagText.text }}</span>
                                    <span class="diver">|</span>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="contact">联系房东</div>
                </div>
            </div>
            <div class="bottom">
               <template v-for="(iten,indey) in intrducedata.hotelSummary" :key="indey">
                <div class="item">
                    <div class="title">{{ iten.title }}</div>
                    <div class="score">{{ iten.introduction }}</div>
                    <div class="desc title">{{ iten.tip }}</div>
                </div>
               </template>
            </div>
        </div>
    </DetailSolt>
  </div>
</template>


<script setup>
import DetailSolt from './DetailSolt.vue';
const props= defineProps({
    intrducedata:{
        type:Object,
        default:()=>({})
    }
})

</script>


<style lang="less" scoped>
.intro{
    .top{
        & img{
    width: 100%;
    border-radius: 3px;}
    }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.66667vw;
    .left{
        display: flex;
        .info{
            .name{
            margin-top: 2.13333vw;
    font-size: 4.26667vw;
    font-weight: 600;
        }
        .tags{
            display: flex;
    margin-top: 1.33333vw;
    font-size: 3.2vw;
    .diver{
        margin: 0 1.33333vw;
    }
        }
        }
        & img{
            width: 14.4vw;
    height: 14.4vw;
        }
    }
    .right{
        .contact{
            height: 6.4vw;
    line-height: 6.4vw;
    border-radius: 1.33333vw;
    padding: 0 3.2vw;
    font-size: 3.2vw;
    color: #fff;
    background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
        }
    }
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    margin: 13.33333vw 2.66667vw 2.66667vw;
    font-size: 3.2vw;
    .title{
        color: #999;
    }
    .score{
        margin: 1.33333vw 0;
    font-size: 4.8vw;
    font-weight: 700;
    color: #333;
    }
  }
}

</style>