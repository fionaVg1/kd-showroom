<template>
    <div class="ppRanking">
        <RankingList :item="topItem"></RankingList>
        <RankingList :item="bottomItem"></RankingList>
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
    mounted(){
        this.topItem = rankingData.top;
        this.bottomItem = rankingData.bottom;
    }
}
</script>
<style lang="scss" scoped>

</style>


