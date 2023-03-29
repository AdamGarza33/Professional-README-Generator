// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    // Projects Name
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    // Description of the project
    {
        type: 'input',
        name: 'description',
        message: 'What is the projects description?',
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps for installation?',
    },
    // Usage info
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    // Contribution Guidelines
    {
      
    }


    
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app
init();
