#!/usr/bin/env node

const {exec} = require('child_process');

exec('npm bin', {cwd: __dirname}, (err, stdout, stderr) => {
  exec(`rm ${process.cwd()}/src/App.css ${process.cwd()}/src/App.test.js ${process.cwd()}/src/index.css ${process.cwd()}/src/logo.svg ${process.cwd()}/src/serviceWorker.js ${process.cwd()}/src/index.js ${process.cwd()}/src/App.js `, {cwd: __dirname}, (err, stdout, stderr) => {
    if(err){
      console.error(err);  
    }else{
      exec(`npm run clear`, {cwd: __dirname},(err, stdout, stderr)=>{
        if (err) {
          console.error(err);
        } else {
            console.log('🚀');
        }
      })

    }
  })
});

// const { exec } = require("child_process");
// const inquirer = require("inquirer");
// const { stderr, stdout } = require("process");

// inquirer
//   .prompt([
//     {
//       name: "delete",
//       type: "checkbox",
//       message: "Cleanup create-react-app",
//       choices: ["App.css", "logo.svg", "stupid.css", "App.js"],
//     },
//   ])
//   .then((answers) => {
//     // console.log(answers.delete);
//     answers.delete.forEach((answer) => {
//       if (answer === "stupid.css") {
//         exec(`rm ${process.cwd()}/stupid.css`, (err, stdout, stderr) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("deleted stupid file");
//           }
//         });
//       } else if (answer == "App.css") {
//         exec(`rm ${process.cwd()}/App.css`, (err, stdout, stderr) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("deleted stupid file");
//           }
//         });
//       } else if (answer == "logo.svg") {
//         exec(`rm ${process.cwd()}/logo.svg`, (err, stdout, stderr) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("deleted stupid file");
//           }
//         });
//       } else if (answer == "App.js") {
//         exec(
//           `echo "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nReactDOM.render(<App />, document.getElementById('root'));" >> ${process.cwd()}/App.js`,
//           (err, stdout, stderr) => {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log("deleted stupid file");
//             }
//           }
//         );
//       } else {
//         return "errr";
//       }
//     });
//   })
//   .catch((err) => console.log(err));

// const {exec} = require('child_process');

// exec('npm bin', {cwd: __dirname}, (err, stdout, stderr) => {
  // exec(`echo import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nReactDOM.render(<App />, document.getElementById('root')); > ${process.cwd()}/index.jsx `, {cwd: __dirname}, (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //       console.log('🚀');
  //   }
  // });
// });