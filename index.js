const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
  const result = array.find(e =>
    e.result == "W"
  );
  if(result) {
    return result.year;
  }else {
    return undefined
  }
}
