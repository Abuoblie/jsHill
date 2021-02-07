// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", 
        ()=> {
            //short alternative
           /* let Fruits = [... new Set(fruits)];
            for (const item of Fruits) {
                console.log(item);
            }*/
            //long alternative
            for (let i = 0; i < fruits.length; i++) {
                for (let j = i+1; j < fruits.length; j++) {
                    
                    if (fruits[i] === fruits[j]) {
                        fruits.splice(j,1);
                        
                    }                   
                }
                
            }
            for (const item of fruits) {
                console.log(item);
            }
        }
    )

})();
