const EventEmitter = require("node:events");
const { emit } = require("node:process");

//create class
class MyEmitter extends EventEmitter {}

//init obj
const myEmitter = new MyEmitter();

//event listener
myEmitter.on("event", () => console.log("event fired!"));

//init event
myEmitter.emit("event");
