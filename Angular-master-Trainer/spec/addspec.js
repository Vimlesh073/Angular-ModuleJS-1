// Test Suite
describe("Add Test Suite",()=>{
// Test Case
it("should add two numbers",()=>{
    var a = 100;
    var b = 200;
    var result = add(a,b);
    expect(result).toBe(300);
})
it("should add string numbers",()=>{
    var a = "100";
    var b = "200";
    var result = add(a,b);
    expect(result).toBe(1300);
})
it("should add one string and one number",()=>{
    var a = "100";
    var b = 200;
    var result = add(a,b);
    expect(result).toBe(300);
})
it("should add array number string numbers",()=>{
    var a = 100;
    var b = 200;
    var result = add([1,2],a,b);
    expect(result).toBe(303);
})
})