import { defineStore } from "pinia";
import getcategories from "../../service/modules/categories";
const usecategories=defineStore("categories",{
    state:()=>({
        categoriedata:{}
    }),
    
    getters:{

    },

    actions:{
        async fetchcategories(){
            const res=await getcategories()
            this.categoriedata=res.data
        }
    }

})

export default usecategories