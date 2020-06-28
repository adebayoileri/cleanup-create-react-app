#!/usr/bin/env node

const {exec} = require('child_process');
const inquirer = require("inquirer");

exec('npm bin', {cwd: __dirname}, (err, stdout, stderr) => {
inquirer
.prompt([
  {
    name: "delete",
    type: "checkbox",
    message: "cleanup create-react-app",
    choices: ["App.js", "logo.svg", "index.css", "App.css", "App.test.js", "serviceWorker.js", "index.js"],
  },
])
.then((answers) => {
  // console.log(answers.delete);
  if(err){
    console.log('Error' + err)
  }else{
    answers.delete.forEach((answer) => {
      switch(answer){
        case "App.js":
          exec(`rm ${process.cwd()}/src/App.js`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted app.js");
            }
          });
        break;
        case "logo.svg":
          exec(`rm ${process.cwd()}/src/logo.svg`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted logo.svg");
            }
          });
        break;
        case "App.css":
          exec(`rm ${process.cwd()}/src/App.css`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted app.css");
            }
          });
        break;
        case "index.js":
          exec(`rm ${process.cwd()}/src/index.js`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted index.js");
            }
          });
        break;
        case "index.css":
          exec(`rm ${process.cwd()}/src/index.css`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted index.css");
            }
          });
        break;
        case "App.test.js":
          exec(`rm ${process.cwd()}/src/App.test.js`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted app.test.js");
            }
          });
        break;
        case "serviceWorker.js":
          exec(`rm ${process.cwd()}/src/serviceWorker.js`, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log("deleted serviceWorker.js");
            }
          });
        break;
      }
    });
  }
  exec(`npm run clear`, {cwd: __dirname},(err, stdout, stderr)=>{
    if (err) {
      console.error(err);
    } else {
        console.log('React app sucessfully cleaned up');
    }
  })
})
.catch((err) => console.log(err));
});
