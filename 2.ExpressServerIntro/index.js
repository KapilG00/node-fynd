const express = require("express");

const expressServer = express();

// MIDDLEWARE NEEDED.
/*
Middleware that will parse every request and then forward the request to 
route handlers.
*/

// I have not given any url to server.use -> so that I can handle for any route.
expressServer.use(express.json());

// HOME ROUTE

// use -> GET, PUT, POST, DELETE, etc.

// expressServer.use("/", (req, res) => {
//   res.end("WELCOME TO HOME PAGE OF EXPRESS APP");
// });

expressServer.get("/", (req, res) => {
  res.end("WELCOME TO THE HOME PAGE");
});

// --------- HANDLE QUERY PARAMS -----------

expressServer.get("/fitness", (req, res) => {
  const queryParams = req.query;
  console.log("queryParams:", queryParams);

  const { type } = queryParams;

  if (type === "gym") {
    res.end("WELCOME TO THE GYM AND EQUIPMENT PAGE.");
  } else {
    res.end("FITNESS: " + queryParams.type);
  }
});

// ------------ HANDLE PARAMS -------------

expressServer.get("/sport/:id", (req, res) => {
  const id = req.params["id"];
  console.log(id);
  res.end("PRODUCTs: " + id);
});

// ----------- HANDLE THE BODY -----------

expressServer.post("/register/", (req, res) => {
  const body = req.body;
  const url = req.url;
  const method = req.method;
  const { name } = body;

  console.log(url, method);

  res.end("REGISTERED SUCCESSFULLY: WELCOME " + name);
});

expressServer.listen(8081, () => {
  console.log("Port working on 8081");
});
