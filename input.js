const {movementObj, messageObj} = require('./constants');

// Stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event listener for stdin
  stdin.on("data", handleUserInput);
  return stdin;
};

// callback function that process client's keyboard input
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  // connection.write sends data to snek-multiplayer server
  if (data === movementObj.MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (data === movementObj.MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (data === movementObj.MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (data === movementObj.MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (messageObj[data]) {
    connection.write(messageObj[data]);
  }
};

module.exports = {
  setupInput
};