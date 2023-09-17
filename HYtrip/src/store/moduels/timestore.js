import { defineStore } from "pinia";

const starttime=new Date()
const endtime=new Date()
endtime.setDate(starttime.getDate()+1)

const usegettime=defineStore("gettime",{
    state:()=>({
        starttime:starttime,
        endtime:endtime
    }),
    
    

})

export default usegettime