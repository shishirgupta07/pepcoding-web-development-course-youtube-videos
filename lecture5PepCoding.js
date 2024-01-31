// nodeJS is like mobile 
// module is like application on mobile
// JS is way to communicate app and mobile

// how to add module in our code in node js or js
// we need to use require to add libreary in out code
        // let cp = require("child_process");
        // console.log("trying to open calculator");
        // cp.execSync("open -a Calculator"); //  this command is for mac 
        // console.log("opened calc");


    //browser open krna with website 
        //    const { exec } = require("child_process");

//             console.log("Trying to open the default browser");

//             // Use the 'open' command to open the default browser
//             exec("open https://www.example.com", (error, stdout, stderr) => {
//             if (error) {
//                 console.error(`Error: ${error.message}`);
//                 return;
//             }
//             console.log("Opened the default browser");
// });

//file system and operating system 
// file open krna using require object
//console.log("output" , cp.execSync("node lecture4PepCoding.js"));
//In this case, the values are separated by a comma. The console.log function 
//treats each argument as a separate value, and it adds a space between them 
//when displaying the output. The output might look like output <Buffer ...>



// console.log("output"+ cp.execSync("node lecture4PepCoding.js"));
//he + operator is used for string concatenation. In this case, 
//the result of cp.execSync("node lecture4PepCoding.js") is treated as 
//a Buffer (binary data), and JavaScript will attempt to convert it to a string. 
//The output might look like: output[object Object]

//  let os = require("os");
// console.log(os.cpus());



//  let fs = require("fs");

 //read and print
// let Buffer = fs.readFileSync("lecture4PepCoding.js");
// console.log("data" + Buffer);


//create file in write mode 
   // fs.openSync("abc.txt","w");
// replace and write new data in the particular abc.js file     
   // fs.writeFileSync("abc.txt","hum aaj bahut khush hai");// if no file then it will create and write data if exist then replcace.


//update file or add/ append in the file
    //fs.appendFileSync("abc.txt","bhai kyo khush nhi hai kya hua??");


//folder
    //fs.mkdirSync("newFolder");
    //fs.writeFileSync("newFolder/newFile.txt", "hello ji this is new file in new folder");


//remove file and folder 
    // let files = fs.readdirSync("newFolder");
    // console.log(files);
    // for(let file = 0; file<files.length;file++)
    // {
    //     console.log(files[file]);
    //     //remove file command
    //     fs.unlinkSync("newFolder/" + files[file]);
    // }

// remove Folder command
    // fs.rmdirSync("newFolder");


// creating 10 folder loop wise naming     
        // for(let i=0;i<=10;i++)
        // {
        //     let dirPathtoMake = `lecture-${i}`;
        //     fs.mkdirSync(dirPathtoMake, { recursive: true });
        // }
        // const fs = require('fs');

//delete all the folders
        // const path = require('path');

        // for (let i = 0; i <= 10; i++) {
        //     let dirPathToDelete = `lecture-${i}`;
        //     let fullPath = path.join(__dirname, dirPathToDelete);

        //     try {
        //         if (fs.existsSync(fullPath)) {
        //             // Check if it's a directory before attempting to remove
        //             if (fs.statSync(fullPath).isDirectory()) {
        //                 fs.rmdirSync(fullPath, { recursive: true });
        //                 console.log(`Deleted folder: ${fullPath}`);
        //             } else {
        //                 console.error(`${fullPath} is not a directory.`);
        //             }
        //         } else {
        //             console.error(`Folder not found: ${fullPath}`);
        //         }
        //     } catch (err) {
        //         console.error(`Error deleting folder: ${err.message}`);
        //     }
        // }

// creating 10 folder each folder containing file 
        //const fs = require('fs');
        // const path = require('path');

        // for (let i = 0; i <= 10; i++) {
        //     let dirPathToMake = `lecture-${i}`;
        //     fs.mkdirSync(dirPathToMake);

        //     // Create a file in each folder
        //     let filePath = path.join(dirPathToMake, 'example.txt');
        //     fs.writeFileSync(filePath, 'This is a sample file content');

        //     console.log(`Created folder and file: ${dirPathToMake}/example.txt`);
        // }


//chalk and figlet 
// let figlet = require("figlet");

// // Use dynamic import for chalk
// import("chalk").then((chalk) => {
//     console.log(chalk.red("This should be red!"));
//     console.log(chalk.red(figlet.textSync("shishir")));
// }).catch((error) => {
//     console.error(error);
// // });
// import chalk from "chalk";
// import figlet from "figlet";

// console.log(chalk.red("This should be red!"));
// console.log(chalk.red(figlet.textSync("shishir")));

// const chalk = require("chalk");
// let figlet = require("figlet");
// console.log(chalk.red("This should be red!"));
// console.log(chalk.red(figlet.textSync("shishir")));

        
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// const chalk = require("chalk");
// const figlet = require("figlet");

// console.log(chalk.red("This should be red!"));
// console.log(chalk.red(figlet.textSync("shishir")));


/////........correct use of chalk and figlet....
            // import chalk from "chalk";
            // import figlet from "figlet";

            // console.log(chalk.red("This should be red!"));
            // console.log(chalk.red(figlet.textSync("shishir")));


