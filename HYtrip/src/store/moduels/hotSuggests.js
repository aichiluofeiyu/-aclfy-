import { defineStore } from "pinia";
import gethotSuggests from "../../service/modules/hotSuggests"
// import myaxios from "../../service/requst/myaxios"
const usehotSuggests=defineStore("hotSuggests",{
    state:()=>({
        hotSuggestdata:[]
    }),
    
    getters:{

    },

    actions:{
        async fetchhotSuggests(){
            const res=await gethotSuggests()
            this.hotSuggestdata=res.data
         }
    }

})

export default usehotSuggests