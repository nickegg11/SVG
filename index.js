const fs = require('fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
// Questions inquirer will use to specify the properties of the object
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please Enter up to 3 Characters:",
    },

    {
        type: "input",
        name: "textColor",
        message: "Please Enter a valid color for text:",
    },

    {
        type: "input",
        name: "shapeColor",
        message: "Please Enter a valid color for shape:",
    },

    {
        type: "list",
        name: "shape",
        message: "Please Choose from list below the shape you would like to implement",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
    // File starts as an empty string
    let svgString = "";
    // Sets width and height of logo container
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.shape}`;

    // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
  }

  // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });

}
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Value must be 3 characters or less");
                init();
            } else {
                writeToFile("logo.svg", answers);
            }
    
    });

}


init();