var fs = require('fs');

const path = require('path');

let folderName = "./05-merge-styles/styles" ;

let folderNameNew = "./05-merge-styles/project-dist" ;

const path1 = path.format({
    dir: folderName ,
    base: "style-1.css",
});

const path2 = path.format({
    dir: folderName ,
    base: "style-2.css",
});

const path3 = path.format({
    dir: folderName ,
    base: "style-3.css",
});

const total = path.format({
    dir: folderNameNew,
    base: "bundle.css",
});

var writeableStream = fs.createWriteStream( total );


function fileHandler(){

fs.readFile( path1, 'utf8', ( err, fileContent ) => {
  if( err ) throw err;
  let toWrite1 = fileContent;

fs.writeFile( total , toWrite1 , function( error ){
  if( err ) throw err;
  writeableStream.write( toWrite1 );
});
 
});

fs.readFile( path2, 'utf8', ( err, fileContent ) => {
  if( err ) throw err;
  let toWrite2 = fileContent;
  
  fs.writeFile( total , toWrite2, function( error ){
    if( err ) throw err;
    writeableStream.write( toWrite2 );
  });

});

fs.readFile( path3, 'utf8', ( err, fileContent ) => {
  if( err ) throw err;
  let toWrite3 = fileContent;

  fs.writeFile( total , toWrite3, function( error ){
    if( err ) throw err;
    writeableStream.write( toWrite3 );
  });

});



};

fileHandler();



// fs.readdir( folderName, { withFileTypes: true }, ( err, files ) => {
//     if (err) { throw err; } ;

//     if( path.extname( file.name ) === ".css" ) {
//         files.forEach(file => {

//             /*
//             fs.copyFile( folderName + `/${file.name}`, folderNameNew + `/${file.name}` , (err) => {
//                 if (err) {
//                   console.log("Error Found:", err);
//                 }
    
//         });
    
//         */
    
//     }) ;

//     }



// }) ;

