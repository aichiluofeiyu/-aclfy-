import myaxios from "../requst/myaxios";

export default function getcategories(){
    return myaxios.get({
        url:"/home/categories"
    })
}