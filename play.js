const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // when client is connected to server
  conn.on("connect", () => {

    console.log("Successfully connected to game server");

    // send server our name
    conn.write("Name: CWL");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 100);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 150);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 200);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 250);
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event listener for stdin
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
connect();
setupInput();
module.exports = {
  connect
};