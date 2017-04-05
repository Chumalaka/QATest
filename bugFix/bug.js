//Code to fix:
//javascript
var summation = function (num) {
  var y = 0;
  for(var i = 0; i<=num; i++){
    y = y+i;
  }
  return y;
}

//Mocha test to pass:
//javascript
/*describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})*/