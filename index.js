const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.  Use the following questions as a guide:  What was your motivation?  Why did you build this project?  What problem does it solve?  What did you learn?  What makes this project stand out?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps needed to install your project?  Please provide a step-by-step description of how to get the development environment running.',
        },
        
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List your collaborators, if any, with links to their Github profiles.  If you used any third-party assets that require attribution, please list them.  If you followed tutorials, include links to those here as well.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What tests can your users use to run your applications?',
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?',
        },
        {
            type: 'email',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'list',
            message: 'Which license would you like to provide to share your work?',
            name: 'license',
            choices: ['Mozilla Public License 2.0', 'GNU GENERAL PUBLIC LICENSE', 'MIT License', 'The Unlicense'],
        }
    ])
    .then((data) => {
        console.log(data.name);
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
//license badge
// [github-license-image]: https://img.shields.io/github/license/commonality/getting-started-inner-source.svg?style=flat-square

//how many license options?
//do we display the license text or keep it in the text doc?
//do we need a function to run through the parameters of what a user is looking for in a license and then to pull an appropriate license?

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();