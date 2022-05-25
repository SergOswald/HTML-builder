var fs = require('fs');

const path = require('path');

const path1 = path.format({
    dir: './05-merge-styles/',
    //base: 'text.txt',
});

let folderName = "./05-merge-styles/styles" ;

let folderNameNew = "./05-merge-styles/project-dist" ;


fs.readdir(folderName, {withFileTypes: true }, (err, files) => {
    if (err) {
        throw err; 
    } ;

    if( path.extname( file.name ) === ".css" ) {
        files.forEach(file => {

            /*
            fs.copyFile( folderName + `/${file.name}`, folderNameNew + `/${file.name}` , (err) => {
                if (err) {
                  console.log("Error Found:", err);
                }
    
        });
    
        */
    
    }) ;

    }



}) ;