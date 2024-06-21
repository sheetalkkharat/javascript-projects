// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return 'nonprofit' for organisation key",() =>{
    expect(launchcode.organization).toBe("nonprofit");
  })

  test("should return 'Jeff' for executiveDirector",() =>{
    expect(launchcode.executiveDirector).toBe("Jeff");
  })

  test("should return 100 for percentageCoolEmployees",() =>{
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })

  test("should return '['Web Development','Data Analysis', 'Liftoff']' for programsOffered",() =>{
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
  })
  
 
});