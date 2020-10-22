<template>
    <div class="orgRelationChart">
        <div class="longline line1"></div>
        <div class="longline line2"></div>
        <div class="rows row1">
            <PersonalIndicator
                :isTopLineShow="false"
                :isBottomLineShow="true"
                :item="firstIndicator"
            ></PersonalIndicator>
        </div>
        <div class="rows row2">
            <PersonalIndicator
                v-for="(item,index) in secondOrgs"
                :key="item.id"
                :isTopLineShow="true"
                :isBottomLineShow="index === thirdIndex"
                :item="item"
            ></PersonalIndicator>
        </div>
        <div class="rows row3">
            <PersonalIndicator
                v-for="item in thirdOrgs"
                :key="item.id"
                :isTopLineShow="true"
                :isBottomLineShow="false"
                :item="item"
            ></PersonalIndicator>
        </div>
    </div>
</template>
<script>
import PersonalIndicator from "@/components/PersonalIndicator.vue";
import orgRelation from "@/data/orgRelation";
import { setInterval, clearInterval } from "timers";
export default {
  name: "OrgRelationChart",
  data() {
    return {
      firstIndicator: {},
      secondOrgs: [],
      thirdOrgs: [],
      timer:'', 
      thirdIndex:0     
    };
  },
  components: { PersonalIndicator },
  methods:{
      scrollOrgRelationChart: function(){
          let firstPage = true;     
          this.firstIndicator = orgRelation;
          this.secondOrgs = this.firstIndicator.children.slice(0, 3);
          this.thirdOrgs = this.secondOrgs[0].children;
          this.timer = setInterval(()=>{
            this.thirdIndex = this.thirdIndex +1;
            if(this.thirdIndex === 3){
                this.thirdIndex = 0;            
                firstPage = !firstPage;
                if(firstPage){
                    this.secondOrgs = this.firstIndicator.children.slice(0, 3);
                }else{
                    this.secondOrgs = this.firstIndicator.children.slice(3,6);
                } 
            }
            this.thirdOrgs = this.secondOrgs[this.thirdIndex].children;
         },2000);
      }
  },
  mounted() {
    this.scrollOrgRelationChart();
  },
  beforeDestroy(){
      clearInterval(this.timer);    
  }
};
</script>
<style scoped lang="scss">
  .orgRelationChart{  
    width: 70.25rem;
    height: 38.4rem;
    background: #27314A;
    border-radius: 0px 10px 0px 0px;    
    float: left;   
    position:relative;  
    .longline {
      width: 46.375rem;
      border-top: 0.05rem solid #08C2B6;
      position: absolute;
      margin-left: 11.95rem;
    }
    .line1 {      
      top: 12.55rem;
    }
    .line2 {     
      top: 25.675rem;
    }
    .rows {
      width: 100%;
      float: left;      
    }
    .row1{
        margin-top: 0.75rem;
      }
      .row2, .row3{
        margin-top:2.55rem; 
      }
  }
  </style>


