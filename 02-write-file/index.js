var fs = require('fs');

const path = require('path');

const path1 = path.format({
    //dir: 'F:\\5-IT\\RSS\\Stage-1\\HTML-builder\\02-write-file',
    dir: './02-write-file',
    base: 'text.txt',
});

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var writeableStream = fs.createWriteStream( path1 );

var stream = new fs.ReadStream( path1 );


console.log( "Enter text:" ) ;

rl.on( "line" , ( answer ) => {
    if( answer === "exit" ) {
          
        console.log("Thank you.");
        rl.close();
        
        }else{
            
            writeableStream.write( `${answer}\n`);
            
            
        } ;

});






