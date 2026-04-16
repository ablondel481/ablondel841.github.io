// matrix.js

// Function to simulate the matrix terminal
function MatrixTerminal() {
    this.commands = {};
}

// Method to register commands
MatrixTerminal.prototype.registerCommand = function(name, func) {
    this.commands[name] = func;
};

// Method to handle input commands
MatrixTerminal.prototype.handleCommand = function(input) {
    const args = input.split(" ");
    const command = args[0];

    if (this.commands[command]) {
        this.commands[command](...args.slice(1));
    } else {
        console.log(`Command not found: ${command}`);
    }
};

// Example usage
const terminal = new MatrixTerminal();

// Registering a command
terminal.registerCommand('greet', function(name) {
    console.log(`Hello, ${name}!`);
});

// Simulating command input
terminal.handleCommand('greet Neo');

// You can expand and register more commands as needed!
