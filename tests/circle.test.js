const Circle = require("../lib/circle")

describe("circle", () => {
    test("can generate circle svg", () => {
        const circle = new Circle("blue", "pink", "MFM")
        const logo = circle.generateLogo()
        expect(logo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">MFM</text></svg>`)
        expect(logo).not.toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">MFM</text></svg>`)
    })
})

