// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let doc = document.getElementById("slider");
    doc.addEventListener("input", ()=>{
        document.getElementById("target").innerHTML = "0"+doc.value;
    }  );
    


})();
