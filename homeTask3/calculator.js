function addNumbers() {
  console.log(arguments);
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
function substractNumbers() {
  console.log(arguments);
  var subs = 0;
  for (var i = 0; i < arguments.length; i++) {
    subs -= arguments[i];
  }
  return subs;
}
function multiplyNumbers() {
  console.log(arguments);
  var multi = 0;
  for (var i = 0; i < arguments.length; i++) {
    multi *= arguments[i];
  }
  return multi;
}
function divideNumbers() {
    console.log(arguments);
    var dev = 0;
    for (var i = 0; i < arguments.length; i++) {
        dev /= arguments[i];
    }
    return dev;
}
