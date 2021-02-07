// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
   document.getElementById("run").addEventListener("click",
       ()=> {
          let a =  document.querySelectorAll("td")
          let sum=0, min=100, max=0;
          
          for (const item of a) {
            let val = (Math.floor(Math.random()*100)+1); 
             document.getElementById(item.id).innerHTML = val;
             sum+= val;
               
              if (min>val) {
                  min = val;
              } 
              if (max<val) {
                max = val;
            }
          }
          document.getElementById("sum").innerHTML=sum;
          document.getElementById("average").innerHTML=(sum/a.length);
          document.getElementById("min").innerHTML= min;
          document.getElementById("max").innerHTML= max;

       }
   
   )
})();
