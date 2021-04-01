// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     
// }
// 
// const gifts = ["teddy bear", "drone", "doll"];
// 
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++ ) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         
//     }
//     return gifts;
// }
// wrapGifts(gifts)

// const cards = [];
// 
// let cardsVar = cards;

function writeCards(cards, event) {
    let results = []
    // Iterate over cards
    // return array of messages
   for (let i = 0; i < cards.length; i++) {
       results.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
   }
   return results
}
// writeCards(cards)

function countDown(number) {
    for(; number > -1; number--) {
        console.log(number);
    }
}