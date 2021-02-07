// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        
        constructor(name, greeting){
            this.name = name;
        }    
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class cat extends Animal {
        static greeting ="miaow";
    }
    class dog extends Animal {
        static greeting ="Woof";
    }
   document.getElementById("run").addEventListener("click",
        ()=> {
            
            const cat1 = new cat('kitty');
            const dog1 = new dog('doggy');
            console.log(cat1.sayHello());
            console.log(dog1.sayHello());
        }
   )

    // your code here
})();
