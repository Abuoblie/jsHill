
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
      document.getElementById("run").addEventListener("click",
       ()=> {
           let colorRand = Math.floor(Math.random()*16777215)+1;
           colorRand = colorRand.toString(16);
           document.getElementById("run").style.backgroundColor="#"+colorRand;
       }
      )
})();
