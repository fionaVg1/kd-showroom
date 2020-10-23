<template>
    <div class="personalIndicator">
         <div class="rows">
             <img :src="item.photo" alt="" class="photo">             
             <div class="info">
                 <div class="name">
                     {{item.name}}
                 </div>
                 <div class="pos">
                     {{item.pos}}
                 </div>
             </div>
             <div class="taskInfo">
                 <div class="progress" :style="{color:color}">
                     {{progress}}
                 </div>
                 <div class="org">
                     {{item.org}}
                 </div>
             </div>          
        </div>
        <div class="rows">
            <ProgressBar v-for="(indicator,index) in item.indicators" :indicator="indicator" :key="index"/>
        </div>              
        <div class="topline" v-show="isTopLineShow"></div>
        <div class="bottomline" v-show="isBottomLineShow"></div>
    </div> 
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue'
export default {
    name:'PersonalIndicator',
    components:{ProgressBar},
    props:{
        isTopLineShow:Boolean,
        isBottomLineShow:Boolean,
        item:Object
    },
    data(){
        return{           
        }
    },
    computed:{
        progress(){
            let indicator = this.item.indicators[0];
            if(indicator.percent<30){
                return '未完成';
            }else if(indicator.percent<100){
                return '完成有风险';
            }else{
                return '已完成';
            }
        },
        color(){
            let percent = this.item.indicators[0].percent;             
            let color;          
            if(percent<30){
                color = '#FD6C6A';
            }else if(percent <100){
                color = '#FF9400';
            }else{
                color = '#08C2B6';
            }
            return color;       
        }
    }
}
</script>
<style  scoped lang="scss">
    .personalIndicator{
        width: 22.425rem;
        height: 10.55rem;
        background: #273D54;
        border-radius: 0.15rem;
        border: 1px solid #2EC6C8;
        margin-left: 0.7375rem;   
        position: relative;   
        .photo{
            float:left;
            width: 2.1rem;
            height: 2.1rem;  
            margin-left:1.5rem;
            margin-top: 1rem;          
        } 
        .info{
            float:left;
            margin-left:0.5rem;
            margin-top:0.8rem;
            .name{                
                height: 1rem;
                font-size: 1rem;  
                font-weight: 400;
                color: #FFFFFF;
                line-height: 1.5rem;
                margin-bottom: 0.2rem;
            }
            .pos{                
                height: 0.75rem;
                font-size: 0.8rem;  
                font-weight: 400;
                color: #FFFFFF;
                line-height: 1.2rem;
                opacity: 0.5;
            }
        }
        .taskInfo{
            float:right;
            margin-right: 1.6rem;
            margin-top:0.8rem;
            .progress{                
                height: 1rem;
                font-size: 1rem;
                font-family: SourceHanSansCN-Normal, SourceHanSansCN;
                font-weight: 400;              
                line-height: 1.5rem;
                margin-bottom: 0.2rem;
            }
            .org{                
                height: 0.8rem;
                font-size: 0.8rem;
                font-family: SourceHanSansCN-Normal, SourceHanSansCN;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 1.2rem;
                text-align:right;
            }
        }
    }
    .rows {
        width: 100%;
        float: left;
    }
    .topline, .bottomline{
        height: 1.3rem;
        border-left: 0.05rem solid #08C2B6;
        position: absolute;
        left: 50%;
        margin-left: -0.025rem;
    }
    .topline{
        top: -1.3rem;
    }
    .bottomline{
        bottom: -1.3rem;       
    }   
    .row1{
        .personalIndicator {
            margin: 0 auto;
        }      
    }
    .row2{
        .personalIndicator {
            float: left;
        }       
    }
    .row3{
        .personalIndicator {
            float: left;
        }      
    }
   
</style>

