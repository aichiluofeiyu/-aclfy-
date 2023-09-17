import myaxios from "../requst/myaxios";

export default function getdetail(houseId){
    return myaxios.get({
        url: "/detail/infos",
        params:{
            houseId
        }
    })
}