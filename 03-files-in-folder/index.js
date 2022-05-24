var fs = require('fs');



const path = require('path');

const path1 = path.format({
    dir: './03-files-in-folder/secret-folder',
    //base: 'text.txt',
});


fs.readdir( "./03-files-in-folder/secret-folder" , (err, data) => {
    if (err) console.log(err) ;
  	let len = data.length ;

      for( let i = 0 ; i < len ; i++ ) {
          /*
        fs.stat(path1, function(err, data[ i ] ) {
            var siz = stats.size;
            
        }) ;
*/
        console.log( data[ i ].slice( 0 , data[ i ].length - 3 ) + " - " + data[ i ].slice( -3 ) + " - " ) ;

      }
})