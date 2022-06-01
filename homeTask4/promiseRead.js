const fs = require("fs");
const fsPromises = require("fs").promises;

const fileName = "./samplefile.txt";

fs.promises
  .readFile(fileName)
  .then(function (result) {
    console.log("Read Successfuly" + result);
  })
  .catch(function (error) {
    console.log(error);
  });
