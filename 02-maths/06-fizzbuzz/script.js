
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    
    for (let i = 1; i <=100; i++) {
        if (i%3 === 0) {
            console.log("buzz ");
        }
        else if (i%5 === 0) {
            console.log("Fizbuzz "); 
        }
        else {
            console.log(i);
        }
        
    }

})();
