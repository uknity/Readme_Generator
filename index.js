// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
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

];

inquirer
    .prompt(questions)
        
    .then((data) => {
        console.log(data);
        const title = `${data.title.toLowerCase().split(' ').join('')}`;
        const description = `${data.description.toLowerCase().split(' ').join('')}`;
        const installation = `${data.installation.toLowerCase().split(' ').join('')}`;
        const usage = `${data.usage.toLowerCase().split(' ').join('')}`;
        const contributing = `${data.contributing.toLowerCase().split(' ').join('')}`;
        const test = `${data.test.toLowerCase().split(' ').join('')}`;
        const userName = `${data.userName.toLowerCase().split(' ').join('')}`;
        const email = `${data.email.toLowerCase().split(' ').join('')}`;
        const license = `${data.license}`;
        console.log(title);
        console.log(description);
        console.log(installation);
        console.log(usage);
        console.log(contributing);
        console.log(test);
        console.log(userName);
        console.log(email);
        console.log(license);
        const readMeContent = generateReadMe(data);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
    );
        
     });


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

      //license badge
// [github-license-image]: https://img.shields.io/github/license/commonality/getting-started-inner-source.svg?style=flat-square

//how many license options?
//do we display the license text or keep it in the text doc?
//do we need a function to run through the parameters of what a user is looking for in a license and then to pull an appropriate license?


// TODO: Create a function to initialize app
// function init() {
//     inquirer;
// }


// // Function call to initialize app
// init();

// var prompt = inquirer.createPromptModule();

// prompt(questions).then(/* ... */);