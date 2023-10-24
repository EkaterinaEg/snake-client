const stdin = process.stdin;
const { KEYS } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  // for (const key in KEYS) {
  //   connection.write(KEYS[key]);
  // }

  if (key === "h") {
    //h => How are you!
    connection.write("Say: HAY");
  }
  if (key === "e") {
    //e => AiH!
    connection.write("Say: WIN");
  }
  if (key === "w") {
    connection.write("Move: up");
    //w
    // console.log("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
    //a
    // console.log("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
    //s
    // console.log("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
    //d
    // console.log("Move: right");
  }
};

stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
};
