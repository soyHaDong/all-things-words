/* importing readline module
 (in order to do the equivalent of 'input' but for node js)
 */

const readline = require('readline');


// interface
// Create interface for input/output (this comes from module rl module)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for a paragraph and spit out how many characters it has
rl.question("Enter your any text, sentence or paragraph: ", (userParagraph) => {

    const totalCharactersInParagraph = userParagraph.length;
    console.log(`You have ${totalCharactersInParagraph} in the piece of text you just inserted...time to lock in bro 😎`);
    rl.close(); // Close the interface
});


