import dayjs from "dayjs";


export function formatmonthday(date){
    return dayjs(date).format("MM月DD日")
}
export function getDiffDays(startDate,endDate){
    return dayjs(endDate).diff(startDate,"day")
}