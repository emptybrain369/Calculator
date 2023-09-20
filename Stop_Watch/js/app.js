/* Start */
const intv = setInterval(count,1000);
function count(){
    var s = document.getElementById("s").value;
    var m = document.getElementById("m").value;
    var h = document.getElementById("h").value;
    var format = "PM"
    s++;
    if(s == 59){
        s = 0;
        m++;
        if(m == 59){
            m = 0;
            h++;
            if(h == 24){
                h = 0;
                format = "AM"
            }
            else{
                format = "PM"  
            }
        }
    }
    document.getElementById("s").value = s;
    document.getElementById("m").value = m;
    document.getElementById("h").value = h;
    document.getElementById("f").value = format;
}
/* Pause Button */
function pause(){
    clearInterval(intv);   
}
/* Resume Button*/
function resume(){
    setInterval(count,1000);
    count();
}
/* Start Button */
/* setInterval(start,1000); */
function start(){
    var s = -1;
    var m = 0;
    var h = 0;
    var format = "PM"
    s++;
    if(s == 59){
        s = 0;
        m++;
        if(m == 59){
            m = 0;
            h++;
            if(h == 24){
                h = 0;
                format = "AM"
            }
            else{
                format = "PM"  
            }
        }
    }
    document.getElementById("s").value = s;
    document.getElementById("m").value = m;
    document.getElementById("h").value = h;
    document.getElementById("f").value = format;
}
      







