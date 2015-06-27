// test cases are described in fixtures.js
describe('stringifyJSON', function(){
  it('should match the result of calling JSON.stringify', function(){

    stringifiableObjects.forEach(function(test){
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
          // Remember to delete console logs
          console.log('Expected results(First test): ', expected);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj){
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
          // Remember to delete console logs
          console.log('Expected results(First test): ', expected);
      expect(result).to.equal(expected);
    });

  });
});
