// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    // your code here

    document.getElementById("run").addEventListener("click",
    ()=>{
       let arr=[];
       for (let index = 0; index < keys.length; index++) {
           arr[index]=[keys[index],values[index]] ;   
       }
       const ob = Object.fromEntries(arr)
    
          console.log(Object.keys(ob));
          console.log(Object.values(ob));
    });  
    
})();
