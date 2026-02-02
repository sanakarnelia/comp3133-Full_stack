const assert = require("assert")
const calculator = require("../app/calculator")
const { describe } = require("mocha")


describe("Sample Test cases",()=>{

    it("add(5, 2) expected result 7 PASS" ,() =>{
        assert.equal(calculator.add(5,2),7)
    })

    it("add(5,2) expected result 8 FAIL" ,() =>{
        assert.equal(calculator.add(5,2),8)
    })

    it("sub(5, 2) expected result 3 PASS" ,() =>{
        assert.equal(calculator.sub(5,2),3)
    })
     it("sub(5,2) expected result 5 FAIL" ,() =>{
        assert.equal(calculator.sub(5,2),5)
    })

    it("mul(5, 2) expected result 10 PASS" ,() =>{
        assert.equal(calculator.mul(5,2),10)
    }) 

    it("mul(5,2) expected result 12 FAIL" ,() =>{
        assert.equal(calculator.mul(5,2),12)
    }) 

    it("div(10, 2) expected result 5 PASS" ,() =>{
        assert.equal(calculator.div(10,2),5)
    })
    it("div(10,2) expected result 2 FAIL" ,() =>{
        assert.equal(calculator.div(10,2),2)
    })
})