// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
  let tardiv = document.getElementById("target");
  let table = document.createElement("table");
  for (let index = 0; index < 12; index++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);
  }
  tardiv.appendChild(table);
  console.log(tardiv)
})();
