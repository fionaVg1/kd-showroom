<template>
    <div class="ppHeader">
        <div class="photo"></div>
        <div class="info">
            <div class="name">张少华123</div>
            <div class="pos">环球集团<span>总经理</span></div>
        </div>
        <div class="completion">
            <div class="figure">66.29<em>%</em></div>
            <div class="field4">业绩完成率</div>
        </div>
        <div class="annualPerRevenue">
            <div class="figure">6980.82<em>（千万）</em></div>
            <div class="field4">年度人均营收</div>
        </div>
        <div class="annualPerSalary">
            <div class="figure">320.36<em>（千万）</em></div>
            <div class="field4">年度人均薪酬</div>
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
    .photo{    
        border-radius: 100%;
        width: 4rem;
        height: 4rem;
        margin: 1.2rem 0.56rem 0 2rem;
        float: left;
        background: url("../assets/header0-big.png") center no-repeat;
        background-size: cover;
    }
    .info{
        float: left;
        height: 100%;
        .name{
            font-family: 'KINGDEEKB-Bold';
            font-size: 0.8rem;
            color: #FFFFFF;
            line-height: 1.4rem;
            margin-top: 1.2rem;
        }
        .pos {
            font-size: 0.8rem;
            color: #FFFFFF;           
            line-height: 1.1rem;
            span {
                margin-left: 0.64rem;
                display: inline-block;
            }
        }
    }
    .completion, .annualPerRevenue, .annualPerSalary{
        float: left;
        margin-left: 2.848rem;
        padding-top: 2.168rem;
    }
    .completion{
        .figure {
            font-size: 1.04rem;
            color: #1BE1FC;
            em {
                color: #1BE1FC;
                font-style: normal;
                font-size: 0.448rem;
                white-space: nowrap;
            }
        }
        .field4 {
            font-size: 0.352rem;
            color: #96CEFF;
            margin-top: 0.448rem;
            letter-spacing: 0.032rem;
        }
    }
    .annualPerRevenue{
        .figure {
            font-size: 1.04rem;
            position: relative;
            color: white;
            em {
                color: white;
                font-style: normal;
                font-size: 0.448rem;
                white-space: nowrap;
            }
        }
        .field4 {
            font-size: 0.352rem;
            color: #96CEFF;
            margin-top: 0.448rem;
            letter-spacing: 0.032rem;
        }
    }
    .annualPerSalary{
        .figure {   
            font-size: 1.04rem;        
            position: relative;
            color: white;
            em {
                color: white;
                font-style: normal;
                font-size: 0.448rem;
                white-space: nowrap;
            }
        }
        .field4 {
            font-size: 0.352rem;
            color: #96CEFF;
            margin-top: 0.448rem;
            letter-spacing: 0.032rem;
        }
    }
</style>


