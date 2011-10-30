// file:///home/peterk/Dokumente/quell/pannous/voice4web/spec/SpecRunner.html?
describe("commonjs", function() {
    it("common", function() {
        var common = new Common();
        expect({
            "test" : "xy", 
            "oh" : {
                "yes" : 1
            }
        }).toEqual(common.clone({
            "test" : "xy", 
            "oh" : {
                "yes" : 1
            }
        }));
        
        expect("trimming works?").toEqual(' trimming works?'.trim());
        expect("trimming works?").toEqual(' trimming works? '.trim());
        expect("trimming works?").toEqual('  trimming works?   '.trim());    
        
        expect(true).toEqual('xy\n'.endsWith('\n'));    
        expect(false).toEqual('\n\t'.endsWith('\n'));    
        expect(true).toEqual('\n'.endsWith('\n'));    
        expect(true).toEqual('\t\n'.endsWith('\n'));            
        expect(false).toEqual('\t\n'.endsWith('\n '));            
    });
});