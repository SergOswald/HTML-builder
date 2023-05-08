var fs = require('fs');
const path = require('path');

let folderName = "./06-build-page/project-dist" ;

let oldfileName = "./06-build-page/template.html";

let newfileName = "./06-build-page/project-dist/index.html";

const path1 = path.format({
    dir: folderName,
  //  base: 'text.txt',
});

fs.mkdir( folderName, err => {
   if( err ) throw err; 
   console.log( 'Папка "project-dist" успешно создана' );
});

fs.copyFile( oldfileName, newfileName, err => {
    if( err ) throw err; 
    console.log('Файл "template.html" успешно скопирован в папку "project-dist" под именем "index.html" ');
 });