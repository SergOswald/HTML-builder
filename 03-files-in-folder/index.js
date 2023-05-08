var fs = require('fs');

const path = require('path');

const path1 = path.format({
  dir: './03-files-in-folder/secret-folder',
    //base: 'text.txt',
});


let folderName = "./03-files-in-folder/secret-folder" ;

fs.readdir( folderName, { withFileTypes: true }, ( err, files ) => {
  if ( err ) { throw err; };

  files.forEach(file => {
        //console.log(file.isDirectory());
    if( file.isFile() ) {
      var ext = path.extname( file.name );
      fs.stat( "./03-files-in-folder/secret-folder" + `/${file.name}` , ( err, stats ) => {
        if ( err ) { console.error( err ); };
        console.log( file.name.slice( 0 , file.name.length - ext.length ) 
        + " - " +  ext + " - "  + Math.floor( stats.size *100 / 1024 ) / 100 + " Кb" );
      });

    };
  });
});