import { defineStore } from "pinia";
const uselogin=defineStore("login",{
    state:()=>({
        token:{
            用户名:"123",
            密码:"123"
        },
        getlogin:true
    }),

})

export default uselogin