<template>
    <div class="ppRanking">
        <RankingList :item="topItem" :isTop="true"></RankingList>
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

</style>


