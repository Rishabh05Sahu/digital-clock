var week= ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function update(){
    var d=new Date;
    document.querySelector(".daytext").innerHTML=week[d.getDay()+1];
    document.querySelector(".datetext").innerHTML=d.getDate()+"-"+d.getMonth()+1+"-"+d.getFullYear();

    document.querySelector(".timetext").innerHTML=d.getHours()+" \xa0 : \xa0 "+d.getMinutes()+" \xa0 : \xa0"+d.getSeconds();

}

setInterval(update,1000);
