// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here

    const doc = document.getElementById("target");
    const text = doc.textContent;
    let speed = 50;
    let i = 0;
    doc.innerHTML=" ";
    function typewriter(){
        if (i < text.length) {
            doc.innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriter,speed)
        }
        
    }
    typewriter();
   //recursive funtion;
})();
