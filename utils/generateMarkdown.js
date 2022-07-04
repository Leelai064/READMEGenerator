// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = function renderLicenseLink(license) {
  if (license == "MIT") {
    return "Please click the link for more info.(https://opensource.org/licenses/EPL-1.0)";
  } else if (license == "GNU") {
    return "Please click the link for more info.(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "Eclipse") {
    return "Please click the link for more info.(https://opensource.org/licenses/EPL-1.0)";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var emptyLicense = "";
}
//lookup github licenses and how it works
// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  // data should have a license badge, license link, license section
  // render functions are going to be used here
  // you have to figure out why...
  return `
 
 # Title

 ${responses.title}

 ##Table of Contents
 * [Title](#title)
 * [Description](#Description)
 * [GitHub](#GitHub)
 * [Email](#Email)
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributions](#contributions)
 * [Tests](#tests)


 ##Description

 ${responses.Description}

 ##GitHUB

 ${responses.GitHub}

 ##Email

 ${responses.Email}

 ##Installation

 ${responses.installation}

 ##Usage

 ${responses.usage}

 ##License
 ${Badge(data.license)}
 ${responses.license}

 ##Contributions

 ${responses.contributions}

 ##Tests

${responses.tests}
    `;
}
//markdown
module.exports = generateMarkdown;
