<template>
  <div class="detailposition">
    <DetailSolt title="位置周边" moretext="更多周边信息">
        <div class="baidu" ref="mapref"></div>
    </DetailSolt>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import DetailSolt from './DetailSolt.vue';
const props=defineProps({
    positiondata:{
        type:Object,
        default:()=>({})
    }
})
    const mapref=ref()
    onMounted(()=>{
        const map = new BMapGL.Map(mapref.value);          // 创建地图实例 
    const point = new BMapGL.Point(props.positiondata.longitude, props.positiondata.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 18);  
    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);     
    })

</script>


<style lang="less" scoped>
.baidu{
    height: 250px;
    
}

</style>