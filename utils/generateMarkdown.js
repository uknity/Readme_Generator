// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === "CCO") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license === "BSD 2-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
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
  }  else if (license === "Apache 2.0 License") {
    return "https://opensource.org/licenses/Apache-2.0";
  }  else {
    return "";
  }
}

function profileViewCounter(userName) {

  if (!userName) {
    return ""
  } else {
    return `![Profile View Counter](https://komarev.com/ghpvc/?username=${userName})`
  }
}

function mostUsedLanguages(userName) {
  if (!userName) {
    return ""
  } else {
    return `![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&theme=blue-green)`
  }
}

function funBadge(userName) {
  if (!userName) {
    return ""
  } else {
    return `![](https://img.shields.io/badge/GitHub-${userName}-181717?style=for-the-badge&logo=github)`
  }
}

function gitStats(userName) {
  if (!userName) {
    return ""
  } else {
    return `![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true)`
  }
}

// TODO: Create a function to generate markdown for README
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function generateMarkdown(data) {
  
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 
  ${profileViewCounter(data.userName)} 
  ${funBadge(data.userName)}  
  ${gitStats(data.userName)} 
  ${mostUsedLanguages(data.userName)}    
  
_____________________________________________________  

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Test](#test)
  - [Questions](#questions)
  - [License](#license)
______________________________________________________

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

For additional information, please visit my GitHub site or send me an email at the address below.  
  
GitHub Username: ${data.userName}  
GitHub Link: https://github.com/${data.userName}  
Email Address: ${data.email}  

## License

${renderLicenseLink(data.license)}`;
}

module.exports = generateMarkdown;
