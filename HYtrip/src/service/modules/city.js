import myaxios from "../requst/myaxios"

export  function getCityAll(){
   return myaxios.get({
        url:"/city/all"
    })
}
