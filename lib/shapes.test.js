// Imports shapes from shapes.js module
const {Circle, Square, Triangle} = require('../lib/shapes')

// Circle
describe('Circle', () => {
    test('renders correct', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="${this.color}"/>`);
    });
});

// Square
describe('Square', () => {
    test('renders correct', () => {
        const shape = new Square();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}"/>`);
    });
});

//Triangle (polygon)
describe('Triangle', () => {
    test('renders correct', () => {
        const shape = new Triangle();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill "${this.color}"/>`);
    });
});