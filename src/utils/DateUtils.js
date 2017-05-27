/**
 * Created by dh on 2016/12/21.
 */

// 时间格式化
export function dateFormat(day,format) {
  let year = day.getFullYear();
  let month = (day.getMonth() + 1) >= 10 ? (day.getMonth() + 1) : "0" + (day.getMonth() + 1);
  let date = day.getDate() >= 10 ? day.getDate() : "0" + day.getDate();
  let hour = day.getHours() >= 10 ? day.getHours() : "0" + day.getHours();
  let min = day.getMinutes() >= 10 ? day.getMinutes() : "0" + day.getMinutes();
  let sec = day.getSeconds() >= 10 ? day.getSeconds() : "0" + day.getSeconds();

  let dateF = "";
  if(format!=null&&format!="undefined"&&format.length>0){
    dateF = format.replace("yyyy",year).replace("MM",month).replace("dd",date).replace("HH",hour).replace("mm",min).replace("ss",sec);
  }else{
    dateF = year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
  }
  return dateF;
}
