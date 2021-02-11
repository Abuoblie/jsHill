// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let val = localStorage.getItem("counter");
     document.getElementById("increment").addEventListener('click',
     ()=>{
         val++;
         localStorage.setItem("counter", val);
         console.log(localStorage);
         document.getElementById("target").innerHTML = localStorage.getItem("counter");
     })
     document.getElementById("target").innerHTML = localStorage.getItem("counter");
})();
