<template>
  <div class="personalPerformance"> 
    <Header :title="headerTitle"></Header>
    <PPHeader></PPHeader>
    <OrgRelationChart></OrgRelationChart>
    <PPRanking></PPRanking>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import PPHeader from '@/components/PPHeader.vue'
import OrgRelationChart from '@/components/OrgRelationChart.vue'
import PPRanking from '@/components/PPRanking.vue'
export default {
    name:'PersonalPerformance',
    components:{Header,OrgRelationChart,PPHeader,PPRanking},
    data(){
        return{
            headerTitle:'人人绩效',
        }
    }
}
</script>

<style scoped lang="scss"> 
    .personalPerformance{
        width: 96rem;
        height: 54rem;
        background: #1B213A;
    }    
</style>

