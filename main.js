#! /user/bin/env node
import inquirer from "inquirer";
let random = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt({
    name: "input",
    type: "number",
    message: "Enter your guessing number range 1 to 10"
});
if (answer.input === random) {
    console.log("Congratulation you guess right number");
}
else {
    console.log("you guess worng number ");
}
