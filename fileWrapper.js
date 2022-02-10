const fs = require("fs");
const path = require("path");

//create directory
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });

//create file
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello world!",
  (err) => {
    if (err) throw err;
    console.log("file created");

    //file append
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      "Something is new",
      (err) => {
        if (err) throw err;
        console.log("file appended");
      }
    );
  }
);

fs.readFile(path.join(__dirname, "test", "test.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
