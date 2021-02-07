
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click",
     ()=> {
       let year = document.getElementById("year").value;
       let months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
       for (let i = 0; i < 12; i++) {
           let day13th = new Date(year, i, 13 );
           let day = day13th.getDay();
           if (day === 5) {
               alert(months[i]);
           }
           
           
       }



     }
    )

})();
