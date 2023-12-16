const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUser() {
  readline.question(">", (input) => {
    if (input.toLowerCase() === 'exit') {
      readline.close();
    } else {
      askUser();
    }
  });
}

askUser();