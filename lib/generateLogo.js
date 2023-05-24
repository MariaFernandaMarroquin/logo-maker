const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

//Functions for shapes
function logoGenerator(data) {
    let logo = ""
    if (data.shape === "Circle") {
        let circle = new Circle(data.textColor, data.shapeColor, data.text);
        logo = circle.generateLogo();
    }
    if (data.shape === "Triangle") {
        let triangle = new Triangle(data.textColor, data.shapeColor, data.text);
        logo = triangle.generateLogo();
    }
    if (data.shape === "Square") {
        let square = new Square(data.textColor, data.shapeColor, data.text);
        logo = square.generateLogo();
    }
    return logo;
}

module.exports = logoGenerator;


