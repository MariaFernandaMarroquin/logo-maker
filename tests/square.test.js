const Square = require("../lib/square")

describe("square", () => {
    test("can generate square svg", () => {
        const square = new Square("red", "green", "MFM")
        const logo = square.generateLogo()
        expect(logo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green"/><text x="150" y="125" font-size="40" text-anchor="middle" fill="red">MFM</text></svg>`)
        expect(logo).not.toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green"/><text x="150" y="125" font-size="40" text-anchor="middle" fill="black">MFM</text></svg>`)
    })
});