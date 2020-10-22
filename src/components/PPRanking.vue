<template>
    <div class="ppRanking">
        <RankingList :item="topItem" :isTop="true" class="rank1"></RankingList>
        <RankingList :item="bottomItem" :isTop="false"></RankingList>
    </div>
</template>
<script>
import RankingList from "@/components/RankingList.vue";
import rankingData from "@/data/rankingList";
export default {
    name:'PPRanking',
    data(){
        return {
            topItem:null,
            bottomItem:null
        }
    },
    components: {RankingList},
    created(){
        this.topItem = rankingData.top;
        this.bottomItem = rankingData.bottom;
    }
}
</script>
<style lang="scss" scoped>
    .ppRanking{
        width: 25rem;
        height: 38.4rem; 
        float:right;
        .rank1{
            margin-bottom: 0.75rem;
        }       
    }
</style>


