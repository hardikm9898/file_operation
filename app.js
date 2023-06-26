const fs = require("fs");
const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");

const filePath = path.join(__dirname, "data", "read.txt");

// basic File Operation

// write file
fs.writeFileSync(filePath, "hello Simform");

// read file

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// append data

fs.appendFileSync(filePath, "good morning", (data, err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// stream
const fileStreamData = fs.createReadStream(filePath);

fileStreamData.on("data", function (chunk) {
  console.log(chunk.toString());
});

app.listen(process.env.PORT);
