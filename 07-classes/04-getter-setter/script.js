// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    
    class person {
        constructor(firstname, Lastname){
            this.firstname = firstname;
            this.Lastname = Lastname;
        }
        get FullName() {
            return this.firstname + " " + this.Lastname;
        }
        set FullName(val) {
            this.firstname = val.split(" ")[0];
            this.Lastname = val.split(" ")[1];
        }
    }
   
    
    document.getElementById("run").addEventListener("click",
    ()=>{
        const pj = new person("Pj","Rowser");
        console.log(pj);
        pj.firstname="Oj";
        pj.Lastname="dowson";
        console.log(pj);
        console.log(pj instanceof person);

    }
    
    )
})();
