import Calculator from "./calc";
describe("calculator testing",()=>{
    
    describe("add function testing",()=>{
        it("10+10 should be equal to 20",()=>{
            const result = new Calculator().add(10,10);
            expect(result).toBe(2);
        });
    });

    describe("sub function testing",()=>{
        it("10-10 should be equal to 0",()=>{
            const result = new Calculator().sub(10,10);
            expect(result).toBe(0);
        });
    });


});