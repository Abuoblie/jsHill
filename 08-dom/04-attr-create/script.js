// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let doc = document.getElementById("source");
    const valDataImage=doc.dataset.image;
    let newElement = document.createElement('img')

    let newdatS =document.createAttribute("src");
    newdatS.value= valDataImage;
    newElement.setAttributeNode(newdatS);
    doc.appendChild(newElement);
    doc.removeAttribute('data-image');
    
    console.log(doc);


})();
