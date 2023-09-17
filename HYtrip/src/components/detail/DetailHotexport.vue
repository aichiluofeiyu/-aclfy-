<template>
  <div class="hotexport">
    <DetailSolt title="热门评论" :moretext="hotexportdata.totalCountStr+`条评论`">
    <div class="comment-inner">
        <div class="header">
            <div class="left"><div class="score">
                <span class="text">{{ hotexportdata.overall }}</span>
                <div class="line"></div>
            </div>
            <div class="info">
                <div class="title">
              {{ hotexportdata.scoreTitle }}
                </div>
                <div class="count">{{ hotexportdata.totalCount }}条评论</div>
                <div class="star" v-if="hotexportdata.overall!=null">
                    <van-rate v-model="value" readonly allow-half :size="12"  color="#ffd21e" />
                </div>
            </div>
        </div>
            <div class="right">
                <template v-for="(item,index) in hotexportdata.subScores" :key="index" >
                    <span class="item">{{ item }}</span>
                </template>
            </div>
        </div>
        <div class="tags">
            <template v-for="(iten,indey) in hotexportdata.commentTagVo" :key="indey">
                <span class="item">{{ iten.text }}</span>
            </template>
        </div>
        <div class="export">
            <div class="user">
                <div class="touxiang">
                    <img :src="hotexportdata.comment?.userAvatars" alt="">
                </div>
                <div class="infos">
                    <div class="name">{{ hotexportdata.comment?.userName }}</div>
                    <div class="date">{{ hotexportdata.comment?.checkInDate }}</div>
                </div>
            </div>
            <div class="text">{{ hotexportdata.comment?.commentDetail }}</div>
        </div>
    </div>
    </DetailSolt>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import DetailSolt from './DetailSolt.vue'

const props=defineProps({
    hotexportdata:{
        type:Object,
        default:()=>({})
    }
})
const value=ref(props.hotexportdata?.overall)
// console.log(value.value);
</script>


<style lang="less" scoped>
.comment-inner{
    padding: 2.66667vw 0;
    .header{
        display: flex;
        .left{
            display: flex;
    align-items: center;
    .score{
        width: 17.33333vw;
    height: 100%;
    color: #333;
    position: relative;
    font-weight: 600;
    .text{
        font-size: 12.8vw;
    position: relative;
    z-index: 9;
    }
    .line{
        width: 17.6vw;
    height: 1.6vw;
    background: linear-gradient(90deg,#fa8c1d,#fcaf3f);
    border-radius: .8vw;
    position: absolute;
    bottom: 1.6vw;
    z-index: 5;
    }
    }
    .info{
        margin-left: 5.06667vw;
        font-size: 3.2vw;
        color: #333;
    .count{
        margin: .8vw 0;
        color: #999;
    }
    // .title{
    //     margin: .8vw 0;
    // color: #999;
    // }
    }
    }
    .right{
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        justify-content: flex-end;
    .item{
        margin-left: 1.33333vw;
        font-size: 3.2vw;
        color: #666;
    }
        }
    }
    .tags{
        display: flex;
        margin: 2.66667vw 0;
        flex-wrap: wrap;
    .item{
        padding: .8vw 1.33333vw;
    margin-right: 2.13333vw;
    margin-top: 1.33333vw;
    border-radius: 2.13333vw;
    font-size: 3.2vw;
    color: rgb(102, 102, 102);
    background: rgb(245, 245, 245);
    }
    }
    .export{
        padding: 2.66667vw;
    border-radius: 1.6vw;
    background-color: #f7f9fb;
    .user{
        display: flex;
        .touxiang{
            img{
                width: 8.53333vw;
                height: 8.53333vw;
                border-radius: 50%;
            }
        }
        .infos{
            margin-left: 2.13333vw;
            .date{
                margin-top: .8vw;
                font-size: 3.2vw;
                color: #999;
            }
        }
    }
    .text{
        font-size: 3.2vw;
        line-height: 4.26667vw;
        color: #333;
        margin-top: 4.26667vw;
    }
    }
}
</style>