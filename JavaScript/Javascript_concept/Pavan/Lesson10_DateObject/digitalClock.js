//create a function

function showTiem(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
//create session variable for pm or am
    let sesson = "AM";

    //show the 12 hours/min/sec clock and show digit 00
    if(h == 0)
        h=12;
    if(h> 12)
        h = h-12;
        sesson = "PM";
    
    // if(h < 10)
    //     h='0'+h;
    // if(m < 10)
    //     m= '0'+m;
    // if(s < 10)
    //     s = '0'+s;
   
    //ternary operator
    h =(h < 10) ? "0"+h : h;
    m =(m < 10) ? "0"+m : m;
    s =(s < 10) ? "0"+s : s;
    
    let time = h+":"+m+":"+s+" " +sesson;
    document.getElementById('dc').innerHTML = time;
    //call function every second to make it digital
    setTimeout(showTiem, 1000);
};
showTiem();