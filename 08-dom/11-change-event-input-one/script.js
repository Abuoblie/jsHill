// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    let impfield = document.getElementById("pass-one");
    let maxN = 10;
    impfield.addEventListener("input", ()=>{
       if (impfield.value.length > maxN) {
           impfield.value = impfield.value.substring(0, maxN);
       }
        console.log(maxN - impfield.value.length);
    })
})();
