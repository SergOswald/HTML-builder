var fs = require('fs');

const path = require('path');

const path1 = path.format({
    dir: './04-copy-directory/files',
    //base: 'text.txt',
});

fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});

let folderName = "./04-copy-directory/files" ;

let folderNameNew = "./04-copy-directory/files-copy" ;

fs.readdir(folderName, {withFileTypes: true}, (err, files) => {
    if (err) {
        throw err; 
    } ;

    files.forEach(file => {
        fs.copyFile( folderName + `/${file.name}`, folderNameNew + `/${file.name}` , (err) => {
            if (err) {
              console.log("Error Found:", err);
            }

    });

}) ;

}) ;
