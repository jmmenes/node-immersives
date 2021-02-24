// Check the get-input.js code as well as the README for the lowdown on the beefing
// up we've done!

// If you call the below function in your
// code, you'll get back the nth thing
// the user typed after `node [filename]`.

// If the user typed in "node nodeimmersives.js 30 5",
// then `getInput(1)` would return "30", and `getInput(2)`
// would return "5".

const getInput = require("./get-input.js");

const first = getInput(1);
const last = getInput(2);

console.log("Hi, " + first + " " + last + "!");
console.log(
  "Your name capitalized is: " + first.toUpperCase() + " " + last.toUpperCase()
);
console.log("Your initials are: " + first[0] + "." + last[0] + ".");
console.log(
  "Your Code Immersives email address is: " +
    first.toLowerCase() +
    "." +
    last.toLowerCase() +
    "@codeimmersives.com"
);
