const readJson = require('../homeTask5/credentials.json');

for (var i = 0; i < readJson.testData.length; i++) {
  var credentials = readJson.testData[i];
  console.log("UserName= " + credentials.username);
  console.log("Password= " + credentials.password);
}
