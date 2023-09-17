import { defineStore } from "pinia";
import gethomelist from "../../service/modules/homelist"
const usehomelist=defineStore("homelist",{
    state:()=>({
        homelistdata:[],
        currentpage:1
    }),
    
    getters:{

    },

    actions:{
        async gethomelist(){
            const res=await gethomelist(this.currentpage)
            this.homelistdata.push(...res.data)
            this.currentpage++
        }
    }

})

export default usehomelist