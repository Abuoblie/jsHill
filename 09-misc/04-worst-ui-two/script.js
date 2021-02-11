// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code hereconst 
    doc = document.getElementById("target");
    doc.innerHTML =" ";
    doc1 = document.getElementById("part-one");
    doc2 = document.getElementById("part-two");
    doc3 = document.getElementById("part-three");
    doc4 = document.getElementById("part-four");
    let val=0;
    let temp
   
    Array.from(document.getElementsByTagName("button")).forEach((element, i )=> {
        element.addEventListener('click', ()=>{
            val =element.innerHTML;
            if (val < element.dataset.max) {
                val = parseInt(val)+1;
            }
            if (val < 10) {
                element.innerHTML = "0"+val; 
            }
            else{
                element.innerHTML = val;
            }
            doc.innerHTML= "0"+doc1.innerHTML+doc2.innerHTML+doc3.innerHTML+doc4.innerHTML;
        })
        
    });
    
    

})();
