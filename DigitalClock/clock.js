setInterval(()=>{
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    
    var date = new Date().getDate();
    var month = months[new Date().getMonth()];
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    
    let d = document.getElementById("date").innerHTML = date;
    let m = document.getElementById("month").innerHTML = month;
    let h = document.getElementById("hour").innerHTML = hours+" :";
    let mi = document.getElementById("minute").innerHTML = minutes;
    let s = document.getElementById("seconds").innerHTML = seconds;
    
},1000)