// Code your solutions in this file

function writeCards(names, event) {
    let greeting = [];
    for (let i = 0; i < names.length; i++) {
       greeting[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       console.log(greeting);
    }
    return greeting;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

// --------

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}