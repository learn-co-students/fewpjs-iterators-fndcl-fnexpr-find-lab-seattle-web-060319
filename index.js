

function superbowlWin(arr) {
  let ans = arr.find(function(ele) {
    return ele.result === "W"
  })
  if(ans){
    return ans.year;
  } else {
    return undefined;
  }
}
