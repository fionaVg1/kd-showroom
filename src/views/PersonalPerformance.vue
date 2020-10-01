<template>
  <div class="personalPerformance">   
    <OrgRelationChart></OrgRelationChart>
  </div>
</template>
<script>
import OrgRelationChart from '@/components/OrgRelationChart.vue'
export default {
    name:'PersonalPerformance',
    components:{OrgRelationChart}
}
</script>

<style scoped lang="scss"> 
    .personalPerformance{
        width: 60rem;
        float: left;
        padding-left: 4.576rem;
        position: relative;     
    }
</style>

