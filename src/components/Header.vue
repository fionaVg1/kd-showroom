<template>
    <div class="header">
        <img src="../assets/logo.png" alt=""/>
        <span class="title">{{title}}</span>
    </div>
</template>
<script>
export default {
    name:'Header',
    props:{
        title:{
            type:String,
            default:'',
            required:true
        }
    },   
}
</script>
<style scoped lang="scss"> 
    .header{
        height: 3.75rem;  
        border-bottom:  0.25rem solid;
        border-color: #188DF0;
        position: relative;
        img{
            width: 7.5rem;
            height: 2.675rem;
            margin-left: 1.75rem;
            margin-top: 0.625rem;
            margin-bottom: 0.75rem;
        }
        .title{          
            font-size: 1.5rem;          
            font-weight: 400;
            color: #FFFFFF;
            line-height: 1.5rem;
            margin-left: 2rem;
            top: 1rem;
            position: absolute;
        } 
    }
</style>

