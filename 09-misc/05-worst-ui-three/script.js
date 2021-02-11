// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    doc = document.getElementById("target");
    doc.innerHTML =" ";
    doc1 = document.getElementById("part-one");
    doc2 = document.getElementById("part-two");
    doc3 = document.getElementById("part-three");
    doc4 = document.getElementById("part-four");
    document.getElementById("fix-part-one").addEventListener("click",
    ()=>{
        let min =parseInt(doc1.dataset.min);
        let max = doc1.dataset.max;
        let rand = Math.floor(Math.random()*(max-min)+min);
        doc1.value = rand;
        doc.innerHTML= "0"+doc1.value + doc2.value + doc3.value + doc4.value;
    })
    document.getElementById("fix-part-two").addEventListener("click",
    ()=>{
        let min =parseInt(doc2.dataset.min);
        let max = doc2.dataset.max;
        let rand = Math.floor(Math.random()*(max-min)+min);
        doc2.value = rand;
        doc.innerHTML= "0"+doc1.value + doc2.value + doc3.value + doc4.value;
    })
    document.getElementById("fix-part-three").addEventListener("click",
    ()=>{
        let min =parseInt(doc3.dataset.min);
        let max = doc3.dataset.max;
        let rand = Math.floor(Math.random()*(max-min)+min);
        doc3.value = rand;
        doc.innerHTML= "0"+doc1.value + doc2.value + doc3.value + doc4.value;
    })
    document.getElementById("fix-part-four").addEventListener("click",
    ()=>{
        let min =parseInt(doc4.dataset.min);
        let max = doc4.dataset.max;
        let rand = Math.floor(Math.random()*(max-min)+min);
        doc4.value = rand;
        doc.innerHTML= "0"+doc1.value + doc2.value + doc3.value + doc4.value;
    })
   
    

})();
