// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    
    // your code here
    document.getElementById("run").addEventListener("click",
     ()=> {
        let alex = people.has("Alexandre")? "including Alexandre" : "not including Alexandre";

         console.log("the set has "+ people.size +" people "+ alex );
     }

    )
})();
