const fs = require("fs");

const fileName = "./samplefile.txt";
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Read file= "+data);
  const content = "Hi i am sopan";
  fs.writeFile(fileName, content, (err2) => {
    if (err2) {
      console.log(err2);
      return;
    }

    fs.readFile(fileName, "utf8", (err3, data2) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log("Read after write= "+data2);
    });

    fs.appendFile(fileName, "append data", (err4, data3) => {
      if (err4) {
        console.log(err4);
        return;
      }
      console.log("After Append= "+data3);
    });
  });
});
