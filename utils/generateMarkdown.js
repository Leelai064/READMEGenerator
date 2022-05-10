// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT':
      return '![Licesne:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'GNU':
        return '![License-GPLv3](https://img.shields.io/badge/License-GPULv3-blue.svg)';
        default:
          return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
  case 'MIT':
    return '![License:MIT](https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '![License:GPU](https://www.gnu.org/licenses/gpl-3.0)';
      default:
        return '';

};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `

[license]${license};

  `
}
//lookup github licenses and how it works
// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  // data should have a license badge, license link, license section
  // render functions are going to be used here
  // you have to figure out why...
  return (
    `
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

${responses.license}

##Contributions

${responses.contributions}

##Tests

${responses.tests}
    `
  )
}
//markdown
module.exports = generateMarkdown;
