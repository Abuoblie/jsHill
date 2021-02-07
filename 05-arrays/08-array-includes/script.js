// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here

    document.getElementById("run").addEventListener("click",
    ()=> {
        let counter=0;
        for (let index = 0; index < fruits.length; index++) {
            if (fruits[index] === "apple") {
                fruits.forEach(element => {
                    console.log(element);
                });
                index = fruits.length;
            }
            
        }
    }

    )

})();
