#! /usr/bin/env node
import inquirer from "inquirer";
let validationFunc = (input) => !isNaN(parseFloat(input));
const randomNumber = Math.floor(Math.random() * 90 + 10);
let answer;
async function question() {
    answer = await inquirer.prompt([{
            name: 'guess',
            message: 'Enter your two digit number guess',
            type: 'number',
            validate: async (input) => validationFunc(input), //!isNaN(parseFloat(input)),
        }]);
}
function checkGuess() {
    if (answer.guess === randomNumber) {
        console.log('You have successfully guessed the number.');
        return true;
    }
    else {
        console.log('Wrong Guess');
        return false;
    }
}
for (let i = 0; i < 3; i++) {
    await question();
    let bool = checkGuess();
    if (bool) {
        i = 3;
    }
    else if (i < 2) {
        console.log("Try again");
    }
}
