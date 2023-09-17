import { defineStore } from "pinia";
const useloading=defineStore("loading",{
    state:()=>({
        isloading:false
    }),

})

export default useloading