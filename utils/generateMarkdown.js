// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  return ''

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  // Select the correct license link
  switch(license) {
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
      case 'Microsoft Public License':
        licenseLink = 'https://opensource.org/license/ms-pl-html/';
        break;
        case 'ISC':
          licenseLink = 'https://opensource.org/license/isc-license-txt/';
          break;
        default:
          licenseLink = '';
          break;
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  // If license is selected creates license section w/ link to the license
  if (license != 'None') {
    licenseSection += '## License\n'
    licenseSection += `Please see ${renderLicenseLink(license)} to get detailed information for this license\n`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(answers.license)}
  - [Contributing](#contributing)
  - [Test](#Test)
  - [Questions](#questions)

## Installation
${answers.installation}

## Usage 
${answers.usage}

${renderLicenseSection(answers.license)}

## Contributing
${answers.guidelines}

## Test
${answers.testing}

## Questions
If you have any questions, please email me at ${answers.email}

Find me on Github: ${answers.username}(https://github.com/${answers.username})

`;
}

module.exports = generateMarkdown;
