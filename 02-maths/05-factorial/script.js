
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let num = document.getElementById("number").value;
        num = parseInt(num);
        let prud=1;
        for (let i = 1; i <= num; i++) {
            prud = prud*i;   
        }
        alert("the factorial of " + num + " is "+" "+ prud);
        

    });

})();
