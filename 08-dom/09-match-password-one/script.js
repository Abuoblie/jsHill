// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click",
    ()=>{
        let pass1 = document.getElementById("pass-one");
        let pass2 = document.getElementById("pass-two");
        if (pass1.value != pass2.value) {
            pass1.style.borderColor ="red";
            pass2.style.borderColor ="red";
        }
        else
        {
            pass1.style.borderColor ="green";
            pass2.style.borderColor ="green";
        }
        
    })
})();
