//test Suite

describe("Add test Suite",()=>{


    //Test case 

    it("should add two numbers ",()=>{


        var a=11;
        var b =222;

        var res = add(a,b);

        expect(res).toBe(233);


    })


    
    it("should add two numbers ",()=>{
        
        
                var a="11";
                var b ='222';
        
                var res = add(a,b);
        
                expect(res).toBe(233);
                
        
            })


            
    it("should add two numbers ",()=>{
        
        
                var a=11;
                var b =222;
                
        
                var res = add(a,b,[11,222,33]);
        
                expect(res).toBe(233);
                
        
            })



})