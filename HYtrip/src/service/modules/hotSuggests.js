import myaxios from "../requst/myaxios"

 function gethotSuggests(){
   return myaxios.get({
        url:"/home/hotSuggests"
    })
}
export default gethotSuggests