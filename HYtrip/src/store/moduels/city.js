import { defineStore } from "pinia";
import {getCityAll } from "../../service/modules/city"
const usecity=defineStore("city",{
    state:()=>({
        citydata:{},
        currentcity:{
            cityName:"武汉"
        }
    }),
    
    getters:{

    },
    actions:{
       async fetchAllCityData(){
           const res=await getCityAll()
           this.citydata=res.data
        }
    }

})

export default usecity