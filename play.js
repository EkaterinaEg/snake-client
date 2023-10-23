const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const obj = connect(); //an object that lets you interact with the server
setupInput(obj);
