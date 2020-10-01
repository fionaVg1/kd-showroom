<template>
    <div class="personalIndicator">
         <div class="rows">
            <span class="span1">{{item.org}}</span>
            <span class="span2">
                <i class="photo"></i>
                <span class="span4"></span>
            </span>
            <span class="span3"></span>
        </div>
        <div class="rows">
            <span class="field field1">指标</span>
            <span class="field field2">完成度</span>
            <span class="field field3">实际/目标</span>
        </div>
        <div class="perBar"></div>            
        <div class="topline" v-show="isTopLineShow"></div>
        <div class="bottomline" v-show="isBottomLineShow"></div>
    </div> 
</template>
<script>
export default {
    name:'PersonalIndicator',
    props:{
        isTopLineShow:Boolean,
        isBottomLineShow:Boolean,
        item:Object
    },
    data(){
        return{           
        }
    }
}
</script>
<style  scoped lang="scss">
    .personalIndicator{
        width: 12.8rem;
        height: 6.08rem;
        background: url(../assets/img2.png) center no-repeat;
        padding: 0.32rem 0.8rem;
        margin: 0 0.4rem 0.8rem;
        position: relative;
        background-size: contain;
    }
    .topline, .bottomline{
        height: 0.416rem;
        border-left: 0.032rem solid #7DFFF3;
        position: absolute;
        left: 50%;
        margin-left: -0.016rem;
    }
    .topline{
        top: -0.416rem;
    }
    .bottomline{
        bottom: -0.416rem;       
    }
</style>

