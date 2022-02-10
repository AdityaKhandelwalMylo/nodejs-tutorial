const EventEmitter = require("events");
const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called listener: ", data));

logger.log("Hi there");

//Create an emitter class
class MyEmitter extends EventEmitter {}

//Initialize object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event", () => {
  console.log("event fired");
});

//Init event
myEmitter.emit("event");
