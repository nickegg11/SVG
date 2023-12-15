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