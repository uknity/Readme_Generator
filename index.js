const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: '',
            name: '',
            message: '',
        },
        {
            type: 'checkbox',
            message: '',
            name: '',
            choices: ['', '', ''],
        },
        {
            type: 'list',
            message: '',
            name: '',
            choices: ['', '', '', ''],
        }
    ])