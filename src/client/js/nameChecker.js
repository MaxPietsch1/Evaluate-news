function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  }
}

// validate if the url input in the form is correct
// const validUrl = require("valid-url");

// install JEST
export { checkForName };
