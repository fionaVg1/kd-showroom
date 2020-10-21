<template>
    <div class="ppHeader">
        <div class="part1">
            <div class="photo">
                <p class="title">
                    总经理
                </p>
            </div>
            <div class="info">
                <div class="name">张少芬</div>
                <div class="pos">金蝶中国有限公司</div>
            </div>
        </div>
        <div class="part2">
            <div class="completion">
                <div class="figure">66.29</div>
                <div class="field4">
                    <span class="text">业绩完成率（%）</span>
                </div>
            </div>
            <div class="annualPerRevenue">
                <div class="figure">6980.82</div>
                <div class="field4">
                    <span class="text">人均营收（千）</span>
                    <span class="number">2.38%</span>
                    <img class="icon up" src="../assets/up.png"/>
                </div>
            </div>
            <div class="annualPerSalary">
                <div class="figure">320.36</div>
                <div class="field4">
                    <span class="text">人均薪酬（千）</span>
                    <span class="number">2.38%</span>
                    <img class="icon down" src="../assets/down.png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'PPHeader',
    data(){
        return {

        }
    }
}
</script>
<style scoped lang="scss">
    .ppHeader{
        height: 10.75rem;
        margin-bottom: 0.75rem;
        .part1{
            width: 19.125rem;
            height: 10.75rem;
            background: #27314A;
            border-radius: 0px 0px 10px 0px;
            float: left;
            .photo{    
                border-radius: 100%;
                width: 6rem;
                height: 6rem;
                margin-top: 2.55rem;
                margin-left: 2rem;         
                float: left;
                background: url("../assets/header0-big.png") center no-repeat;
                background-size: cover;
                position: relative;
                .title{
                    font-size: 0.9rem;
                    font-weight: 400;
                    line-height: 1rem;
                    color: #F9F9F9;
                    position: absolute;
                    bottom: 0.4rem;
                    left: 50%;
                    transform: translatex(-50%);
                }
            }
            .info{
                float: left;
                height: 100%;
                margin-left:1.5rem;
                margin-top:3.775rem;
                .name{              
                    width: 6rem;
                    height: 1.8rem;
                    font-size: 2rem;                   
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: 1.8rem;
                }
                .pos {
                    width: 7.2rem;
                    height: 1rem;
                    font-size: 0.9rem;                  
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 1rem; 
                    opacity: 0.5;  
                    margin-top: 1.1rem;        
                }
            }
        }
        .part2{
            float: right;
            width: 76.125rem;
            height: 10.75rem;
            background: #27314A;
            border-radius: 0px 0px 0px 10px;
            .completion, .annualPerRevenue, .annualPerSalary{
                float: left;
                margin-left: 2.848rem;
                padding-top: 2.168rem;
            }
            .figure{
                height: 4.5rem;
                font-size: 4.75rem;
                font-family: KINGDEEKB-Regular;
                font-weight: 400;
                line-height: 4.5rem;
            }
            .field4 { 
                margin-top:0.2rem;                  
                .text{                        
                    font-size: 1.125rem;                       
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 1.125rem;
                    letter-spacing: 0.125rem;
                    opacity: 0.7;
                }
                .number{                    
                    font-size: 1.3rem;
                    font-family: KINGDEEKB-Bold, KINGDEEKB;
                    font-weight: bold;
                    color: #FD6C6A;
                    line-height: 1.125rem;
                    padding-left: 0.3rem;
                }
                .icon{
                    width: 1.05rem;
                    height: 1.05rem;
                    padding-left: 0.325rem;
                }
            }
            .completion{
                margin-left: 4.4rem;
                .figure {                  
                    width: 10.075rem;                    
                    color: #FF9400;
                }                
            }
            .annualPerRevenue{
                margin-left: 11.2rem;
                .figure {
                    width: 14.25rem;                  
                    color: #08C2B6;                                  
                }                
            }
            .annualPerSalary{
                margin-left: 12.025rem;
                .figure {   
                    width: 12.175rem;                    
                    color: #1890FF;                    
                }
                .field4 {                                   
                }
            }
        }
    }
</style>


