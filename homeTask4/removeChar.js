const arr = ["1357", "2480", "0428", "1234", "2345", "3456", "7531"];

function remove(arr) {
  var uniqueSet = new Set();
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i].split("").sort().join("")) {
        uniqueSet.add(arr[j]);
      }
    }
  }
  console.log(uniqueSet);
}
remove(arr);
