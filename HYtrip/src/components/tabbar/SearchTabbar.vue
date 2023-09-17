<template>
  <div class="searchbar">
    <div class="seach">
        <div class="searchtime">
            <div class="item starttime">住 {{ start_time }}</div>
            <div class="item endtime">离 {{ end_time }}</div>
        </div>
        <div class="searchbody">关键字/位置/民宿</div>
        <div class="icon"><van-icon name="search" /></div></div>
  </div>
</template>


<script setup>
import usegettime from "../../store/moduels/timestore";
import { formatmonthday } from "../../utils/format_dayjs";


const timestore=usegettime()
const {starttime,endtime}=timestore
const start_time=formatmonthday(starttime)
const end_time=formatmonthday(endtime)

</script>


<style lang="less" scoped>
.searchbar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    z-index: 9;
    background-color: #fff;
    .seach{
        display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    font-size: 14px;
    color: #999;
    border-radius: 6px;
    background: #f2f4f6;
    .searchtime{
        display: flex;
    flex-direction: column;
    .item{
        display: flex;
    flex-direction: row;
    align-items: center;
    line-height: normal;
    font-size: 10px;
    }
    }
    .searchbody{
        position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #fff;
    }
    }
}

</style>