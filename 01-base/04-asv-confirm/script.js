
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    var age = prompt("please enter your age");
    var Gender = prompt("please enter your gender");
    var Town = prompt("please enter your town");
    var cmt = confirm("please confirm your choice")
    while (cmt === false) {
        var age = prompt("please enter your age");
        var Gender = prompt("please enter your gender");
        var Town = prompt("please enter your town");
        var cmt = confirm("please confirm your choice")
    }
})();
