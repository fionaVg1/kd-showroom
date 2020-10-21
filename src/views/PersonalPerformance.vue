<template>
  <div class="personalPerformance"> 
    <PPHeader></PPHeader>
    <OrgRelationChart></OrgRelationChart>
    <PPRanking></PPRanking>
  </div>
</template>
<script>
import PPHeader from '@/components/PPHeader.vue'
import OrgRelationChart from '@/components/OrgRelationChart.vue'
import PPRanking from '@/components/PPRanking.vue'
export default {
    name:'PersonalPerformance',
    components:{OrgRelationChart,PPHeader,PPRanking}
}
</script>

<style scoped lang="scss"> 
    .ppHeader{
        width: 50%;
        height: 8rem;        
        background-size: contain;
        position: relative;
        margin: 0 auto;
    }
    .orgRelationChart{
        width: 60rem;
        float: left;
        padding-left: 4.576rem;
        position: relative;     
    }
    .ppRanking{
        float: left;
        width: 30rem;
        margin-left: 3rem;
        position: relative;
        top: -5rem;
    }
</style>

