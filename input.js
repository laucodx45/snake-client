// Stores the active TCP connection object.
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, messageObj} = require('./constants');
let connection;

// Update the setupInput() function to accept a single parameter and assign its value to the connection variable.
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

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (data === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (data === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (data === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (messageObj[data]) {
    connection.write(messageObj[data]);
  }
};


module.exports = {
  setupInput
};