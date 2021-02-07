// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
 const dElement = document.getElementsByTagName("img");
 const dhover = dElement[0].dataset.hover;
 const dsrc = dElement[0].src;
 console.log(dElement);
 console.log(dhover);
 console.log(dElement[0].src);
 dElement[0].addEventListener("mouseover",
  ()=> {
      dElement[0].src = dhover;
  }
 )
 dElement[0].addEventListener("mouseleave",
 ()=> {
    dElement[0].src = dsrc;
}
)
 
 
})();
