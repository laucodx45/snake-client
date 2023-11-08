const net = require("net");
const {IP, PORT, playerName} = require('./constants');
const { platform } = require("os");
// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // when client is connected to server
  conn.on("connect", () => {

    console.log("Successfully connected to game server");
    
    conn.write(playerName);
    
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {
  connect
};