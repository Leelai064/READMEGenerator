// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const md = require('./utils/generateMarkdown');
const fs = require('fs')
const filename = "README.md"

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title',
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
    type: 'list',
    name:'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT','GNU']
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
   writeToFile(filename,fileresponses)
 });
}

// // Function call to initialize app
init();

// var data = {
//   numFakes: 2
// }
// console.log(fakeStuff(data));