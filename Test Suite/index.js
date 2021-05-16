function isTrue(value){
  if (value){
    return "Test passes"
  } else {
    return "Test fails"
  }
}

function expect(actual){
  return {
    toEqualTo: function(expected){
      if (actual == expected) {
        console.log("Pass")
      } else {
        console.log('Fail')
      }
    return {
    toInclude: function(expected) {
      if (actual.includes(expected)){
        console.log('Pass') 
      } else {
        console.log('Fail')
      }
    }
    }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}

it('2+2 is equal to 4', function() {expect(2+2).toEqualTo(4)})
it('2+5 is equal to 4', function() {expect(2+5).toEqualTo(4)})
it('the array contains a rogue banana', function() {expect(['apple', 'apple', 'banana', 'apple']).toInclude('banana')})