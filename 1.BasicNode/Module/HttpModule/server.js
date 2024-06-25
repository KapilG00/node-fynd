const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Inside create server callback!!");

  //   const url = req.url;
  //   console.log("ACCEPTING REQUEST FOR ", url);

  //   res.write("WELCOME TO NODEJS!!");
  //   res.write("\n1");
  //   res.write("\n2");
  //   res.write("\n3");
  //   res.write("\n4");
  //   res.write("\n5");

  //   res.end("\nEnd of the response!!");

  let body = [];
  //   req
  //     .on("data", (chunk) => {
  //       // Each 'chunk' is a Buffer instance
  //       console.log("chunk:", chunk);
  //       body.push(chunk);
  //     })
  //     .on("end", () => {
  //       body = Buffer.concat(body).toString();
  //       console.log("body:", body);
  //       // At this point, we have the complete request body
  //     });

  req.on("data", (chunk) => {
    console.log("chunk:", chunk);
    body += chunk.toString(); // Convert buffer to string and accumulate.
  });

  // Listen for 'end' event to know when the entire body has been received.
  req.on("end", () => {
    console.log("Received body:", body);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK\n");
  });
});

server.listen(8080, () => {
  console.log("Server is running on 127.0.0.1:8080");
});

/*

    RESPONSE OBJECT:
    1. We can write to response multiple times.
    2. In the end we can end the response. 
    3. After res.end() NEVER do res.write() or res.end()


    REQUEST OBJECT:
    1. It contains URL, METHOD and other things.

*/
