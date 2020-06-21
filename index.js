const { exec } = require('child_process');
const inquirer = require('inquirer');
const { stderr, stdout } = require('process');



inquirer.prompt([{
    name: "delete",
    type: 'checkbox',
    message: 'Cleanup create-react-app',
    choices: ['App.css', 'logo.svg', 'stupid.css']
}

]).then((answers) => {
    
    // console.log(answers.delete);
    answers.delete.forEach((answer)=>{
        
        if(answer === 'stupid.css'){
        exec(`rm ${process.cwd()}/stupid.css`,(err,stdout, stderr) =>{
            if(err){
                console.log(err)
            }else{
                console.log('deleted stupid file');
                
            }
        })
        }else{
            return;
        }
    })
    
}).catch(err => console.log(err))