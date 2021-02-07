
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    
    document.getElementById("run").addEventListener("click",
       ()=> {
           let day = document.querySelector("#dob-day").value;
           let month = document.querySelector("#dob-month").value;
           let year = document.querySelector("#dob-year").value;  
           let yourbDate = new Date(day, month, year);
           let today =  new Date();
           let Tday = today.getDay();
           let Tyear = today.getFullYear();
           let Tmonth = today.getMonth()+1;
           let age = Tyear - year;
           if (month > Tmonth) {
               age = age-1;
           }
           else if ((month == Tmonth) && (day > Tday)) {
             age = age-1;
           }
           alert("you are "+ age + " years old");
       }
    )
    

})();
