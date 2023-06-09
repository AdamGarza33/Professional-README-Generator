// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
 const generateMarkdown = require('./utils/generateMarkdown');
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
        message: 'What are the instructions for installation?',
    },
    // Usage info
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?'
    },
    // Contribution Guidelines
    {
      type: 'input',
      name: 'guidelines',
      message: 'What are the contribution guidelines for this project?'
    },
    // Test Instructions
    {
        type: 'input',
        name: 'testing',
        message: 'What are the test instructions for this project?'
    },
    // License Options
    {
        type: 'list',
        name: 'licensing',
        message: 'What license is your project using?',
        choices: ['MIT', 'Microsoft Public License', 'ISC']
    },
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub?'
    },
    // GitHub Email Address 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }

    
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data);
// };

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((answers) => {
        fs.writeFile('README.md', generateMarkdown(answers), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File saved successfully')
            }
        })
    })
}
// Function call to initialize app
init();
