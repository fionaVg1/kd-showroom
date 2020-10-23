<template>
    <div class="rankingList">
        <div class="listtitle">
            <span>金蝶中国当月销售人员排行榜{{item.type}}</span>         
        </div>
        <ul class="list">
            <li v-for="(item,index) in item.list" :key="item.id" :class="{'top':isTop}">
                <div class="medal" :id="'medal'+item.id">
                    <span class="index" v-if="isTop">{{index+1}}</span> 
                    <span class="index" v-else>{{index+80}}</span>                               
                </div>
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
        margin-left:1.5rem;
        margin-bottom:1.25rem;
        padding-top: 1rem;     
        span{            
            height: 1.125rem;
            font-size: 1.125rem;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #00A9FF;
            line-height: 1.125rem;
        }        
    }
    .list{
        margin-left:1.5rem;       
        li{            
            height: 2.4rem;
            font-size: 0.9rem;           
            font-weight: 400;
            color: #FF9400;
            line-height: 1.35rem;  
            margin-bottom: 0.6rem;        
            .medal{
                float: left; 
                width: 2.4rem;               
                height: 2.4rem;                             
                border-radius: 1.2rem; 
                background:#35425E;
                position: relative;
                margin-right:2.75rem;
                .index{
                    font-size: 1rem;      
                    font-weight: 400;
                    color: #D3D5DA;
                    line-height: 2.4rem;   
                    position:absolute;
                    left: 50%;
                    transform: translate(-50%);
                }               
              
            } 
            .name,.figure{
                float:left;                
                height: 2.4rem;
                font-size: 0.9rem;                
                font-weight: 400;
                color: #FFFFFF;
                line-height: 2.4rem;                
            }           
            .figure{  
                float: right;             
                margin-right: 3.025rem;
            }
        }
        li.top:first-child{
            .name,.figure{
                color: #FF9400;
            }
            .medal{
                background: url("../assets/medal-gold.png") center no-repeat;
                background-size: contain;                
                -webkit-text-fill-color: transparent;
            }
        }
        li.top:nth-of-type(2){
            .name,.figure{
                color: #96BFFF;
            }
            .medal{
                background: url("../assets/medal-silver.png") center no-repeat;
                background-size: contain;                
                -webkit-text-fill-color: transparent;
            }
        }
        li.top:nth-of-type(3){
            .name,.figure{
                color: #FFBD92;
            }
            .medal{
                background: url("../assets/medal-bronze.png") center no-repeat;
                background-size: contain;                
                -webkit-text-fill-color: transparent;
            }
        }
    }
</style>


