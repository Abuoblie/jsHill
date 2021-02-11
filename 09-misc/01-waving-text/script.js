// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
   const doc =  document.getElementById("target");
   const txt = doc.textContent;
   doc.innerHTML= txt.split(/\S/g, "<span class='char'>$&</span>");
  // let  text = txt.split("")
   let i = 3, j=0;
   doc.innerHTML= " "
 
  


})();
