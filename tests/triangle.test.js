const Triangle = require("../lib/triangle")

describe("triangle", () => {
    test("can generate triangle svg", () => {
        const triangle = new Triangle("purple", "white", "MFM")
        const logo = triangle.generateLogo()
        expect(logo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="white"/><text x="150" y="150" font-size="40" text-anchor="middle" fill="purple">MFM</text></svg>`)
        expect(logo).not.toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="white"/><text x="150" y="150" font-size="40" text-anchor="middle" fill="black">MFM</text></svg>`)
    })
});