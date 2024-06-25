const fs = require("node:fs");

// Async version of "fs".

// 1. Create.

fs.appendFile(
  "./filesFolder/file.txt",
  "Hey there, welcome to my file structure!!",
  (error, data) => {
    if (error) {
      console.log(error, "Error while file creation.");
    } else {
      console.log("File created successfully!!");
    }
  }
);

// 2. Read.

fs.readFile("./filesFolder/file.txt", (error, data) => {
  if (error) {
    console.log(error, "error file reading");
  } else {
    // data is in BUFFER FORMAT.
    console.log(data);

    // convert Buffer to String (VISIBLE FORMAT).
    console.log(data.toString());
  }
});

// 3. Update.

fs.appendFile(
  "./filesFolder/file.txt",
  "\nThis is the new line",
  (error, data) => {
    if (error) {
      // handling of error
      console.log(error, "Error while updating the file.");
    } else {
      console.log("File updated successfully!!");
    }
  }
);

// 4. DELETE

// fs.unlink("./filesFolder/file.txt", (error) => {
//   if (error) {
//     console.log("Error while deleting file", error);
//   } else {
//     console.log("File deleted successfully!!");
//   }
// });

console.log("a");

fs.readFile("./filesFolder/file.txt", (error, data) => {
  console.log("c");
});

console.log("b");
