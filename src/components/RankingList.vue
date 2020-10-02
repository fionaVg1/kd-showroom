<template>
    <div class="rankingList">
        <div class="listtitle">
            <span>某公司当月销售人员排行榜</span>            
            <span>{{item.type}}</span>
        </div>
        <ul class="list">
            <li v-for="item in item.list" :key="item.id">
                <i class="medal" id="medal{item.id}"></i>
                <i class="photo"></i>
                <span class="name">{{item.name}}</span>
                <span class="figure">{{item.figure}}</span>                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'RankingList',
    props:{
        item:Object
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


