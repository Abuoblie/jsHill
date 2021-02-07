// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    const p = document.getElementsByClassName("target");
    for (let index = 0; index < p.length; index++) {
        p[index].innerHTML= "owned";
        
    }
    
    

})();
