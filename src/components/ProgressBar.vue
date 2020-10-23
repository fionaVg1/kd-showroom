<template>
    <div class="progressBar">
        <div class="desc">
            <span class="title">{{indicator.title}}</span>
            <span class="percent" :style="{color:color}">{{indicator.percent+'%'}}</span>
            <span class="figure" :style="{color:color}">{{indicator.figure}}</span>
        </div>
        <div class="progressAll">
            <div class="progress" :style="{background:color,width:indicator.percent+'%'}">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        indicator:Object
    },
    computed:{
        color(){
            let percent = this.indicator.percent;             
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
<style lang="scss" scoped>
    .progressBar{
        margin-top:0.7rem;
        .desc{
            position: relative;
            .title{   
                width:4rem;             
                height: 0.6rem;
                font-size: 0.6rem;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 1.35rem;
                margin-left:1.5rem;
            }
            .percent{                
                height: 1.8rem;
                font-size: 1.5rem;
                font-family: KINGDEEKB-Regular, KINGDEEKB;
                font-weight: 400;          
                line-height: 1.8rem;
                position: absolute;
                left:45%;
                top:-0.4rem;
            }
            .figure{
                height: 1.8rem;
                font-size: 1.5rem;
                font-family: KINGDEEKB-Regular, KINGDEEKB;
                font-weight: 400;          
                line-height: 1.8rem;
                position: absolute;
                right:1.5rem;
                top:-0.4rem;
            }
        }
        .progressAll{
            width: 19.425rem;
            height: 0.25rem;
            background: #FFFFFF;        
            margin-left:1.5rem;
            .progress{
                height: 0.25rem;
            }
        }
    }
</style>


