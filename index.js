// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    // Projects Name
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },

    
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
init();
