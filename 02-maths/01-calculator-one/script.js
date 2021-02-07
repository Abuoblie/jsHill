
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
            let num1 = document.getElementById("op-one").value;
            let num2 = document.getElementById("op-two").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2); 
            alert("result :"+" "+ (num1+num2));
        
      
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let num1 = document.getElementById("op-one").value;
            let num2 = document.getElementById("op-two").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2); 
            alert("result :"+" "+ (num1-num2));
        
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let num1 = document.getElementById("op-one").value;
            let num2 = document.getElementById("op-two").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2); 
            alert("result :"+" "+ (num1*num2));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let num1 = document.getElementById("op-one").value;
            let num2 = document.getElementById("op-two").value;
            num1 = parseFloat(num1);
            num2 = parseFloat(num2); 
            alert("result :"+" "+ (num1/num2));
    });
})();
