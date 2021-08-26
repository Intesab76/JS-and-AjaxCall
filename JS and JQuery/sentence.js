let speechToText= `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
let fragments = speechToText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
console.log(fragments)

let counter = 1;

for (let statement in fragments){
    if (fragments[statement].split(' ').length > 4){
        let resultingStatement = `${counter}. ${fragments[statement].replace(/[6-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(resultingStatement);
        counter++;
    }
}
