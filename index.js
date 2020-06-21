const inquirer = require('inquirer');

inquirer.prompt([{
    name: "delete",
    type: 'checkbox',
    message: 'Cleanup create-react-app',
    choices: ['App.js', 'logo.svg', 'App.css']
}

]).then((answers) => {
    console.log(answers.delete);
});