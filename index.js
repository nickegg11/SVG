const { writeFile } = require('fs/promises');
const inquirer = require("inquirer");
const { join } = require('path');
const { createDocument } = require('./document');
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shapeElement} ${this.textElement}</svg`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${color}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

// Questions inquirer will use to specify the properties of the object
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please Enter up to 3 Characters:",
    },

    {
        type: "input",
        name: "text color",
        message: "Please Enter a valid color for text:",
    },

    {
        type: "input",
        name: "shape color",
        message: "Please Enter a valid color for shape:",
    },

    {
        type: "list",
        name: "shape",
        message: "Please Choose from list below the shape you would like to implement",
        choices: ["Circle", "Square", "Triangle"],
    },
];