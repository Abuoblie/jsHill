// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here

    let rand = Math.floor(Math.random()*100)+1;
    console.log(rand);
    let y = 1;
    let CorrectGuess = false;
    while(y <= 10 && CorrectGuess === false) {
        let pickedNumber = prompt("please make a guess",0);
        
        if(pickedNumber == rand)
        {
            alert("congrats, you geuss right");

            CorrectGuess = true;
        }
        else if (pickedNumber < rand) {
            alert("search higher");
        }
        else{
            alert("search lower");
        }
        y++;
    }
    alert("number of guesses elapse");

})();
