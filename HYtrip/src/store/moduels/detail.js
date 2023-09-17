import { defineStore } from "pinia";
import getdetail from "../../service/modules/detail"

const usedeatil=defineStore("deatil",{
    state:()=>({
        detaildata:{},
        
    }),
    

    actions:{
        async getdetaildata(houseId){
            const res=await getdetail(houseId)
            this.detaildata=res.data
            // console.log(this.detaildata);
        }
    }

})

export default usedeatil