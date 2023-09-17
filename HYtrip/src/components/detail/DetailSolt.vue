<template>
  <div class="section">
    <div class="header">
        <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
        <slot>
            <h2>11111111</h2>
        </slot>
    </div>
    <div class="footer">
        <span class="more">查看{{ moretext }}</span>
        <van-icon name="arrow" />
    </div>
  </div>
</template>


<script setup>
    defineProps({
        title:{
            type:String,
            default:()=>("123")
        },
        moretext:{
            type:String,
            default:()=>("456")
        }
    })

</script>


<style lang="less" scoped>
.section{
    padding: 0 15px;
    margin-top: 12px;
    border-top: 5px solid #f2f3f4;
    background-color: #fff;
    .header{
        height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    .title{
        font-size: 20px;
    color: #333;
    }
    }
    .content{
        padding: 8px 0;
    }
    .footer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    line-height: 44px;
    color: #ff9854;
    font-size: 14px;
    font-weight: 600;
    }
}

</style>