// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a description of your project.  Use the following questions as a guide:  What was your motivation?  Why did you build this project?  What problem does it solve?  What did you learn?  What makes this project stand out?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps needed to install your project?  Please provide a step-by-step description of how to get the development environment running.",
  },

  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "List your collaborators, if any, with links to their Github profiles.  If you used any third-party assets that require attribution, please list them.  If you followed tutorials, include links to those here as well.",
  },
  {
    type: "input",
    name: "test",
    message: "What tests can your users use to run your applications?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "email",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "list",
    message: "Which license would you like to provide to share your work?",
    name: "license",
    choices: ["CCO", "BSD 2-Clause License", "Boost Software License 1.0", "Apache 2.0 License", "MIT", "No License"],
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((data) => {
      const readMeContent = generateMarkdown(data);

      // TODO: Create a function to write README file
      // function writeToFile(fileName, data) {}

      fs.writeFile("README.md", readMeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md!")
      );
    });
}

// Function call to initialize app
init();
