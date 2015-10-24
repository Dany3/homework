describe("Triangle", function() {
   describe("Valid triangle", function() {
	    
	 it("It identify correctly a valid triangle", function() { 
	 	var res = TryAngle.isTriangle(5,5,5);
	 	expect(res).toBe(true);
	  });
	
	  it("It identify correctly a valid equilateral triangle", function() { 
	 	var res = TryAngle.getTypeBySidesLength(5,5,5);
	 	expect(res).toBe("equilateral");
	  });

          it("It identify correctly a valid isoscele triangle", function() { 
	 	var res = TryAngle.getTypeBySidesLength(3,2,2);
	 	expect(res).toBe("isosceles");
	  }); 

          it("It identify correctly a valid scalene triangle", function() { 
	 	var res = TryAngle.getTypeBySidesLength(3,4,5);
	 	expect(res).toBe("scalene");
	  });
 
   }); 
    
  describe("Invalid triangle", function() {
	    
	it("It identify correctly an invalid triangle", function() { 
      		var res = TryAngle.isTriangle(2,0,3);
      		expect(res).toBe(false);
  	});
 
	}); 
  
 
});
