// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let impfield = document.getElementById("pass-one");
 
    let counter=0;
    
    impfield.addEventListener("input", ()=>{
        counter = impfield.value.length;
         let inpValue = impfield.value;
          console.log(inpValue +" : "+counter); 
          let ndig = Array.from(inpValue.match(/\d/g)).length;
          if ((ndig >= 2) && (counter >= 8)) {
              document.getElementById("validity").innerHTML="ok";
          }
          else {
            document.getElementById("validity").innerHTML="not ok";
          }
          console.log(Array.from(inpValue.match(/\d/g)).length);
    })
    // other alternative
   //console.log(inpValue.replace(/[^0-9]/g,"").length);
   //let ndig = ( (inpValue.match(/\d/g) || []).length);
})();
