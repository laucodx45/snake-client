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
  if (data === 'w') {
    console.log("Move: up");
  }
  if (data === 'a') {
    console.log("Move: left");
  }
  if (data === 's') {
    console.log("Move: down");
  }
  if (data === 'a') {
    console.log("Move: right");
  }
};

module.exports = {
  setupInput
};