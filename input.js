const stdin = process.stdin;

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "\u0077") {
    connection.write("Move: up");
    //w
    // console.log("Move: up");
  }
  if (key === "\u0061") {
    connection.write("Move: left");
    //a
    // console.log("Move: left");
  }
  if (key === "\u0073") {
    connection.write("Move: down");
    //s
    // console.log("Move: down");
  }
  if (key === "\u0064") {
    connection.write("Move: right");
    //d
    // console.log("Move: right");
  }
  if (key === "\u0068") {
    //h => How are you!
    connection.write("HAY");
  }
  if (key === "\u0065") {
    //e => AiH!
    connection.write("AiH");
  }
};

stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
};
