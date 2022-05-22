var fs = require('fs');

const path = require('path');

const path1 = path.format({
    dir: 'C:\\IT\\RSS\\Stage1\\Serg\\HTML-builder\\02-write-file',
    base: 'text.txt',
});

const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

var writeableStream = fs.createWriteStream( path1 );

 
rl.question("Enter text:", function( answer ) {
    if( answer !== "exit" ) {
    
    writeableStream.write( `\n${answer}`);
    
    }else{
        console.log("Thank you.");
        rl.close();
        
    } ;
   
});











