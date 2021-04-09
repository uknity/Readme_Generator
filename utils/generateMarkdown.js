// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "CCO") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license === "BSD 2-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "CCO") {
    return "https://creativecommons.org/publicdomain/zero/1.0/";
  } else if (license === "BSD 2-Clause License") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if (license === "Boost Software License 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ![Repos Dependence](https://img.shields.io/librariesio/dependent-repos/npm/inquirer)

  https://img.shields.io/github/commit-activity/y/commonality/getting-started-inner-source.svg?style=flat-square
  
## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Credits](#credits)
    5. [Test](#test)
    6. [Questions](#questions)
    7. [License](#license)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributing}

## Test

${data.test}

## Questions

GitHub Username: ${data.userName}  
GitHub Link: https://github.com/${data.userName}  
Email Address: ${data.email}  

## License


${renderLicenseLink(data.license)}`;
}

module.exports = generateMarkdown;
