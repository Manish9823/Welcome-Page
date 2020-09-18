
window.onload=function()
{  let display=document.querySelector('body');
   let tim=new Date();
   let h=tim.getHours();
   setImage(display,h);
   setTime();
   setName();
}

function setImage(display,h){
   const greet=document.getElementById("greeting");
   if(h<10){
      display.style.backgroundImage="url('img/morning.jpg')"
      greet.innerHTML="Good Morning, ";  
   }
   else if(h<16){
      display.style.backgroundImage="url('img/afternoon.jpg')"
      greet.innerHTML="Good Afternoon, "; 
   }
   else if(h<20){
     display.style.backgroundImage="url('img/evening.jpg')"
     greet.innerHTML="Good Eveninng, ";  
   }
   else{
     display.style.backgroundImage="url('img/night.jpg')"
     greet.innerHTML="Good Night, ";  
   }
}

function setTime(){
   let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let TS=document.getElementById("time");
    const ampm=h<=12 ? 'AM' : 'PM' ;
    h=h%12;
    const show=setzero(h)+":"+setzero(m)+":"+setzero(s)+" "+ampm;
    TS.innerHTML=show;
    
    setInterval(setTime,1000)
}
function setzero(t){
       if (t<10)
         return ("0"+t);
      else
         return t;
}

function setName(){
let name=document.getElementById("name");
if(localStorage.getItem("Namee")==null)
   name.textContent="User"
else
   name.textContent=localStorage.getItem("Namee")
console.log(name.textContent)
name.onblur=function(){
   console.log("go")
   localStorage.setItem("Namee",name.textContent)
}
}