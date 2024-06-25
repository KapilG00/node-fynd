const EventEmitter = require("node:events");

const emitterObject = new EventEmitter();

// LISTEN TO AN EVENT.
emitterObject.on("shashi", (...data) => {
  console.log("hello world", data);
});

// CREATION OF AN EVENT.
emitterObject.emit("shashi", 100, 200, 300);
