// // Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for(let i=0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     };
//     return gifts;
// };
// wrapGifts(gifts);

let names = ["Charlie", "Samip", "Ali"];
let event = 'birthday';

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

console.log(writeCards(names, event));

function countDown(n){
   while (n >= 0){
      console.log (n);
      n--;
   }
};
countDown(10)
