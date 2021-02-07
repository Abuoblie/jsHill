// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
   const doc =  document.getElementById("target");
   const txt = doc.textContent;
   doc.innerHTML = txt.replace(/\S/g, "<span class='letter'>$&</span>");
   
   

})();
