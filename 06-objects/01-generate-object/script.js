// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here

    document.getElementById("run").addEventListener("click",
      ()=> {
          let MyObject = {
            lastname:"Oblie",
            firstname:"Abu",
            age:"34",
            city:"Gosselies",
            country:"Belgium"
          };
          console.log(MyObject);
      }
    )
})();
