// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let tardiv = document.getElementById("target");
  let table = document.createElement("table");
  for (let i = 0; i < 10; i++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      for (let j = 0; j < 10; j++) {
          let td = document.createElement("td");
          td.innerHTML= (i+1)*(j+1);
          tr.appendChild(td);  
      }
  }
  tardiv.appendChild(table);
  console.log(tardiv)
})();


