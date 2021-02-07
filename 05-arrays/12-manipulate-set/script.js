// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click",
      ()=> {
          fruits.add("banana");
          fruits.add("kiwi");
          fruits.delete("apple");
          fruits.delete("cherry");
          for (const item of fruits) {
            console.log(item);
        }
      }
      
    )



})();
