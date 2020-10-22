<template>
    <div class="rankingList">
        <div class="listtitle">
            <span>当月销售人员排行榜</span>            
            <span>{{item.type}}</span>
        </div>
        <ul class="list">
            <li v-for="(item,index) in item.list" :key="item.id">
                <i :class="{medal:true,'top':isTop}" :id="'medal'+item.id">{{index+1}}</i>
                <i class="photo" :id="'photo'+item.id"></i>
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
        item:Object,
        isTop:Boolean,
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .rankingList{
        width: 25rem;
        height: 18.82rem;
        background: #27314A;
        border-radius: 10px 0px 0px 10px;    
    }
    .listtitle{
        width: 12.32rem;
        margin-bottom: 0.32rem;
        margin-left: 2rem;
        float: left;
        span{
            font-size: 0.82rem;
            color: #FFFFFF;
            float: left;
        }
        span:first-child{
            width: 70%;
            text-align: center;
        }
        span:last-child{
            float: right;
            width: 3rem;
        }
    }
    .list{
        width: 12.32rem;
        margin: 0 auto;
        li{
            font-size: 0.576rem;
            color: #96CEFF;          
            width: 100%;
            float: left;
            margin-left:0.6rem;
            margin-top:0.2rem;
            margin-bottom:0.5rem;
            .medal{
                float: left;
                width: 0.624rem;
                height: 1rem;
                margin-right: 1rem;
                font-style: normal;
                line-height: 1rem;
                text-align: center;
            }
            .photo{
                float: left;
                width: 1.2rem;
                height: 1.2rem;
                margin-right: 1rem;
                font-style: normal;
                line-height: 1rem;
                text-align: center;
                background: url("../assets/header1.png") center no-repeat;
                background-size: contain;
                margin-top:-0.1rem;
            }
            .name{
                float:left;
                width:3rem;
                height:1rem;
                line-height:1rem;
            }
            .figure{
                float:right;
                width:5rem;
                height:1rem;
                line-height:1rem;
                text-align:center;
            }
        }
        li:first-child{
            color: #F0C419;
            .top{
                background: url("../assets/medal-gold.png") center no-repeat;
                background-size: contain;
            }
        }
        li:nth-of-type(2){
            color: #ECF0F1;
            .top{
                background: url("../assets/medal-silver.png") center no-repeat;
                background-size: contain;
            }
        }
        li:nth-of-type(3){
            color: #F3A240;
            .top{
                background: url("../assets/medal-bronze.png") center no-repeat;
                background-size: contain;
            }
        }
    }
</style>


