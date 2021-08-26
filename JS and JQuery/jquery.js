// const paragraph = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
// const sentences = paragraph.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")

// console.log(sentences);

let str = 'lowerAndUppercase';
str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

console.log(str);