// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Akin"];
function writeCards(names) {
  let thankYouMessages = [];
  for (let c = 0; c < names.length; c++) {
    let message = `Thank you, ${names[c]}, for the wonderful surprise gift!`;

    thankYouMessages.push(message);
  }
  return thankYouMessages;
}
console.log(writeCards(names));

function countDown(number) {
  let b = 10;
  while (b >= 0) {
    console.log(b);
    b--;
  }
}
countDown(10);
