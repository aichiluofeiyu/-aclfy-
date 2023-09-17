import myaxios from "../requst/myaxios";

export default function gethomelist(currentpage){
    return myaxios.get({
        url:"/home/houselist",
        params:{
            page:currentpage
        }
    })
}