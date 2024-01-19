let strtbtn=document.querySelector('#start');
let stpbtn=document.querySelector('#stp');
let rstbtn=document.querySelector('#reset');
let lapbtn=document.querySelector('#lapb');
let laps=document.querySelector('#laps');
let hour= 0;
let minute=0;
let sec=0;
let count=0;
let lapcnt=1;

strtbtn.addEventListener('click',function(){
    timer=true;
    stopwatch();
});
stpbtn.addEventListener('click',function(){
    timer=false;

})
rstbtn.addEventListener('click',function(){
    hour=0;
    minute=0; sec=0;
    count=0;
    document.getElementById('hr').innerHTML = " 00 "; 
    document.getElementById('min').innerHTML = " 00 "; 
    document.getElementById('sec').innerHTML = " 00 "; 
    document.getElementById('cnt').innerHTML = " 00 "; 
    document.getElementById('laps').innerHTML='';
    document.getElementById('lap').innerHTML=0;
   })
function stopwatch(){
    if(timer){
        count ++;
    if(count==100)
   { sec++;
     count=0;}
     if(sec==60)
     {
        minute++;
        sec=0;
     }
     if(minute==60)
     {
        hour++;
        minute=0;
     }
     let hrstr=
     hour;
     let minstr=minute;
     let secstr=sec;
     let countstr=count;
     if(hour<10){
        hrstr=" 0"+hrstr;

     }
     if(minute<10)
     {
        minstr=" 0"+minstr;

     }
     if(sec<10)
     {
        secstr=" 0"+secstr;

     }
     if(count<10){
        countstr=" 0"+countstr;
     }
    
     document.getElementById("hr").innerHTML=" "+hrstr;
     document.getElementById("min").innerHTML=" "+minstr;
     document.getElementById("sec").innerHTML=" "+secstr;
     document.getElementById("cnt").innerHTML=" "+countstr;
     setTimeout(stopwatch,10);
    }     
}
lapbtn.addEventListener('click',()=>{
   laps.innerHTML+="<li>"+"Lap"+lapcnt++ + "<br>"+document.getElementById("hr").innerHTML+":"+document.getElementById("min").innerHTML+":"+document.getElementById("sec").innerHTML+":"+document.getElementById("cnt").innerHTML+"</li>";
  })
