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
  // If license is selected creates license section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
