/* Present Date and Time */
var date = new Date();
/* for year */
var toYear = date.getFullYear();
document.getElementById("toYear").value = toYear;
/* for month */
var toMonth = date.getMonth()+1;
document.getElementById("toMonth").value = toMonth;
/* for date */
var toDate = date.getDate();
document.getElementById("toDate").value = toDate;

/* Birth Date and Time */
function cal(){
    bYear=parseInt(document.getElementById("bYear").value);
    bMonth=parseInt(document.getElementById("bMonth").value);
    bDate=parseInt(document.getElementById("bDate").value);
    if(bDate > toDate){
        toDate = (toDate + 30);
        toDate = (toDate - bDate);
        toMonth -= 1;
        if(bMonth > toMonth ){
           toMonth += 12;
           toMonth = (toMonth - bMonth);
           toYear -= 1;
           toYear = (toYear - bYear);
        }
        else{
            toMonth = (toMonth - bMonth);
            toYear = (toYear - bYear);  
        }
    }
    else if(toMonth < bMonth){
        toDate = (toDate - bDate);
        toMonth += 12;
        toMonth = (toMonth - bMonth);
        toYear -= 1;
        toYear = (toYear - bYear);
    }
    else{
        toDate = (toDate - bDate);
        toMonth = (toMonth - bMonth);
        toYear = (toYear - bYear);
    }
    document.getElementById("rDate").value = toDate;
    document.getElementById("rMonth").value = toMonth;
    document.getElementById("rYear").value = toYear;
}