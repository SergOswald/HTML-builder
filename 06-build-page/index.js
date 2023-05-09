var fs = require('fs');
const path = require('path');

let blockName = "./06-build-page/components/";


// const path1 = path.format({
//     dir: folderName,
//   //  base: 'text.txt',
// });

//====
// перемещение всех стилей в заданную папку в один файл

let stylesfolderName = "./06-build-page/styles" ;

let stylesfolderNameNew = "./06-build-page/project-dist/styles" ;

let folderName = "./06-build-page/project-dist" ;


fs.mkdir( folderName, err => {
  if( err ) throw err; 
  console.log( 'Папка "project-dist" успешно создана' );
});

fs.mkdir( stylesfolderNameNew, err => {
  if( err ) throw err; 
});

const path1 = path.format({
  dir: stylesfolderName ,
  base: "footer.css",
});

const path2 = path.format({
    dir: stylesfolderName ,
    base: "header.css",
});

const path3 = path.format({
    dir: stylesfolderName ,
    base: "main.css",
});

const total = path.format({
    dir: stylesfolderNameNew,
    base: "style.css",
});

var writeableStream2 = fs.createWriteStream( total );


function fileHandler(){

fs.readFile( path1, 'utf8', ( err, fileContent ) => {
  if( err ) throw err;
  let toWrite1 = fileContent;

fs.writeFile( total , toWrite1 , function( error ){
  if( err ) throw err;
  writeableStream2.write( toWrite1 );
});
 
});

fs.readFile( path2, 'utf8', ( err, fileContent ) => {
  if( err ) throw err;
  let toWrite2 = fileContent;
  
  fs.writeFile( total , toWrite2, function( error ){
    if( err ) throw err;
    writeableStream2.write( toWrite2 );
  });

});

fs.readFile( path3, 'utf8', ( err, fileContent ) => {
  if( err ) throw err;
  let toWrite3 = fileContent;

  fs.writeFile( total , toWrite3, function( error ){
    if( err ) throw err;
    writeableStream2.write( toWrite3 );
  });

  console.log( 'Стили успешно скопированы в один файл "project-dist/styles/styles.css" ' );  

});

};

//fileHandler();

//====

// Перемещение папки assets in project-dist с вложениями

let assetsfolderName = "./06-build-page/assets" ;

let newassetsfolderName = "./06-build-page/project-dist/assets" ;

fs.mkdir( newassetsfolderName, err => {
  if( err ) throw err; 
});

fs.mkdir( "./06-build-page/project-dist/assets/fonts", err => {
  if( err ) throw err; 
});

fs.mkdir( "./06-build-page/project-dist/assets/img", err => {
  if( err ) throw err; 
});

fs.mkdir( "./06-build-page/project-dist/assets/svg", err => {
  if( err ) throw err; 
});

fs.readdir( "./06-build-page/assets/fonts", { withFileTypes: true }, ( err, files) => {
  if ( err ) { throw err; };

  files.forEach( file => {
    fs.copyFile( "./06-build-page/assets/fonts" + `/${file.name}`, 
    "./06-build-page/project-dist/assets/fonts" + `/${file.name}` , 
    (err) => { if ( err ) { console.log( "Error Found:" , err ); } });
  }) ;

}) ;

fs.readdir( "./06-build-page/assets/img", { withFileTypes: true }, ( err, files) => {
  if ( err ) { throw err; };

  files.forEach( file => {
    fs.copyFile( "./06-build-page/assets/img" + `/${file.name}`, 
    "./06-build-page/project-dist/assets/img" + `/${file.name}` , 
    (err) => { if ( err ) { console.log( "Error Found:" , err ); } });
  }) ;

}) ;

fs.readdir( "./06-build-page/assets/svg", { withFileTypes: true }, ( err, files) => {
  if ( err ) { throw err; };

  files.forEach( file => {
    fs.copyFile( "./06-build-page/assets/svg" + `/${file.name}`, 
    "./06-build-page/project-dist/assets/svg" + `/${file.name}` , 
    (err) => { if ( err ) { console.log( "Error Found:" , err ); } });
  }) ;
  console.log( 'Папка "project-dist/assets" со всеми вложениями успешно создана' );

}) ;

//====

//====
// Добавление блоков в project-dist/index.html

let oldfileName = "./06-build-page/template.html";

let newfileName = "./06-build-page/project-dist/index.html";

fs.copyFile( oldfileName, newfileName, err => {
  if( err ) throw err; 
  console.log('Файл "template.html" успешно скопирован в папку "project-dist" под именем "index.html" ');
});


var writeableStream = fs.createWriteStream( newfileName );

fs.readFile( newfileName, 'utf8', (error, fileContent) => {

  fs.readFile( "./06-build-page/components/header.html", 'utf8', (errorHeader, fileContentHeader) => {
  if( errorHeader ) throw errorHeader;
  fileContent = fileContent.replace( /\{\{header\}\}/, fileContentHeader );
  writeableStream.write(fileContent);
  //writeableStream.end();

  });

});

/*
fs.readFile( newfileName, 'utf8', (error, fileContent) => {

  fs.readFile( "./06-build-page/components/articles.html", 'utf8', (errorHeader, fileContentHeader) => {
    if( errorHeader ) throw errorHeader;
    fileContent = fileContent.replace( /\{\{articles\}\}/, fileContentHeader );
    writeableStream.write(fileContent);
    //writeableStream.end();
  });

});

/*

var writeableStream = fs.createWriteStream( newfileName );

fs.readFile( newfileName, 'utf8', (error, fileContent) => {

  fs.readFile( "./06-build-page/components/footer.html", 'utf8', (errorHeader, fileContentHeader) => {
    if( errorHeader ) throw errorHeader;
    fileContent = fileContent.replace( /\{\{footer\}\}/, fileContentHeader );
    writeableStream.write(fileContent);
    writeableStream.end();
  });

});

*/
fileHandler();