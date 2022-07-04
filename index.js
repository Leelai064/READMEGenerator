// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const md = require('./utils/generateMarkdown');
const fs = require('fs');
const fileName = "ProjectREADME.md";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name:'Description',
    message: 'Give a brief description of your project:'
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email username?'
  },
  {
    type: 'input',
    name:'installation',
    message: 'What installs are needed to complete this project?'
  },
  {
    type: 'input',
    name:'usage',
    message: 'Please provide the usage of this project'
  },
  {
    type: 'list',
    name:'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT','GNU','Eclipse']
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'How did you contribute to this project?:'
  },
  {
    type: 'input',
    name:'tests',
    message: 'Please provide the tests you used for this project:'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, fileresponses) { 
  fs.writeFile(fileName, fileresponses, (err)=> {
  err? console.error(err): console.log('Written File');
});
}

// TODO: Create a function to initialize app
function init() {
 inquirer
 .prompt(questions)
 .then((responses) => {
   const fileresponses = md(responses)
   writeToFile(fileName,fileresponses)
 });
}

// // Function call to initialize app
init();

