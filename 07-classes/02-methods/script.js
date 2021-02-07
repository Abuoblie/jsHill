//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class person {
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        
        sayHello(){
          return "Hello "+ this.lastname +" "+this.firstname;
        }
    }
    document.getElementById("run").addEventListener("click",
     ()=> {
         const newPsn = new person('disny', 'flix');
         console.log(newPsn.sayHello());
     }
    
    )

})();
