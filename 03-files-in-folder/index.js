var fs = require('fs');



const path = require('path');

const path1 = path.format({
    dir: './03-files-in-folder/secret-folder',
    //base: 'text.txt',
});

/*
fs.readdir( "./03-files-in-folder/secret-folder" , (err, data) => {
    if (err) console.log(err) ;
  	let len = data.length ;

      for( let i = 0 ; i < len ; i++ ) {
          /*
        fs.stat(path1, function(err, data[ i ] ) {
            var siz = stats.size;
            
        }) ;

        console.log( data[ i ].slice( 0 , data[ i ].length - 3 ) + " - " + data[ i ].slice( -3 ) + " - " ) ;

      }
})

*/



let folderName = "./03-files-in-folder/secret-folder" ;

fs.readdir(folderName, {withFileTypes: true}, (err, files) => {
    if (err) {
        throw err; 
    } ;

    files.forEach(file => {
        //console.log(file.isDirectory());
        if( file.isFile() ) {
            var ext = path.extname( file.name );
            
            /*
            fs.stat( file , (err, stats ) => {
                if (err) {
                  console.error(err);
                } ;
                
            });

            */

            console.log( file.name.slice( 0 , file.name.length - ext.length ) + " - " +  ext + " - "  );
        }
        //console.log(file.isFile());

        

    });
}) ;