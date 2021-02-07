// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
    
        // your code here
        let nmbs = document.getElementById("numbers").value;
        let  nmbsArr = nmbs.split(', ');
        
        for (let i = 0; i < nmbsArr.length; i++) {     
            for (let j = i+1; j < nmbsArr.length; j++) {

                if(parseInt(nmbsArr[i]) > parseInt(nmbsArr[j])){
                    let tmp = nmbsArr[i];
                    nmbsArr[i] =parseInt(nmbsArr[j]) 
                    nmbsArr[j] = parseInt(tmp);
                }
                
            }
            
        }
        let sortnb = "";
        for (const item of nmbsArr) {
            sortnb+=item+", "
        }
       alert(sortnb);

    });

})();
