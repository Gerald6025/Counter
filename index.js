let count = 0;


document.getElementById("decreaseBtn").onclick= function() {
    count-=1
    document.getElementById('countlabel').innerHTML=count
    
}

document.getElementById("increaseBtn").onclick= function() {
    count+=1
    document.getElementById('countlabel').innerHTML=count
    
}
document.getElementById("resetBtn").onclick= function() {
    count=0
    document.getElementById('countlabel').innerHTML=count
    
}


let start = document.getElementById('start');

start.addEventListener('click',()=>{
    
let num=10;
 const intervalID = setInterval(UpdateCounter, 1000)
  function UpdateCounter() {
          num--;
          document.getElementById('auto').innerHTML=num
      if (num <= 0) {
        clearInterval(intervalID);
      }
 }

 let stop = document.getElementById('stop');

 stop.addEventListener('click',()=>{
    clearInterval(intervalID);
     
 })

})







 //   let num=10;
    
//     const intervalID = setInterval(UpdateCounter, 1000);
//     function UpdateCounter() {
//       num--;
//       document.getElementById('auto').innerHTML = num;
//       if (num <= 0) {
//         clearInterval(intervalID);
//       }
//     }