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

console.log("Connecting ...");
connect();

module.exports = {
  connect
};