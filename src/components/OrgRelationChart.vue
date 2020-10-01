<template>
    <div class="orgRelationChart">
        <div class="longline line1"></div>
        <div class="longline line2"></div>
        <div class="rows row1">
            <PersonalIndicator :isTopLineShow="false" :isBottomLineShow="true" :item="firstIndicator"></PersonalIndicator>
        </div>
        <div class="rows row2">
            <PersonalIndicator v-for="item in secondOrgs" :key="item.id" :isTopLineShow="true" :isBottomLineShow="true" :item="item"></PersonalIndicator>
        </div>
        <div class="rows row3">
            <PersonalIndicator v-for="item in thirdOrgs" :key="item.id" :isTopLineShow="true" :isBottomLineShow="false" :item="item"></PersonalIndicator>
        </div>
    </div>    
</template>
<script>
import PersonalIndicator from '@/components/PersonalIndicator.vue'
import orgRelation from '@/data/orgRelation'
export default {
    name:'OrgRelationChart',
    data(){
        return {
            firstIndicator:{},
            secondOrgs:[],
            thirdOrgs:[]
        }
    },
    components:{PersonalIndicator},
    mounted(){
        this.firstIndicator = orgRelation;
        this.secondOrgs = this.firstIndicator.children.slice(0,4);
        this.thirdOrgs = this.secondOrgs[0].children;
    }
}
</script>
<style scoped lang="scss">
    .longline{
        border-top: 0.032rem solid #7DFFF3;
        position: absolute;    
        margin-left: 6.8rem;    
    }
    .line1{
        width: 40.8rem;
        top: 6.464rem;
    }
    .line2{
        width: 40.8rem;
        top: 13.318rem;
    }
    .rows{
        width: 100%;
        float: left;
    }
    .row1 .personalIndicator{
        margin: 0 auto 0.8rem;
    }
    .row2 .personalIndicator, .row3 .personalIndicator {
        float: left;
    }
</style>


