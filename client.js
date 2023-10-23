const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  //Send name to server
  conn.on("connect", () => {
    conn.write("Name: EEg");
  });

  //Movements
  conn.on("connect", () => {
    //setTimeout
    // _____________________
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 50);
    ///setInterval
    // ________________________
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);
    // -------------------------------------
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};
