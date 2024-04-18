#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to codewithurooj - CLI Number guessing game");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessingNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 10):",
    },
]);
if (answer.userguessingNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number");
}
else {
    console.log("Sorry, Your guess is wrong!");
}
