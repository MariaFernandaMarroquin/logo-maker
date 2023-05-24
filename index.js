const inquirer = require("inquirer");
const fs = require("fs");
const logoGenerator = require("./lib/generateLogo");

const userInput = [
    {
        type: "input",
        name: "text",
        message: "Welcome to the logo generator, please enter the text for the logo (only 3 characthers):",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the color for the text:",
    },
    {
        type: "list",
        message: "Choose a shape:",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the color for the shape:",
    }
];

//Function to initialize app
function init() {
    inquirer.prompt(userInput).then((data) => {
        const dataToGenerator = logoGenerator(data)
        writeToFile(dataToGenerator)
    });
};

//Function to write svg file
function writeToFile(data) {
    fs.writeFile("logo.svg", data, err => {
        err ? console.log(err) : console.log("Generated logo.svg");
    }
)}

//Function call to initialize app
init();

