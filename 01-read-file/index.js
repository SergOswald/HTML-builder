var fs = require('fs');

const path = require('path');

const path1 = path.format({
    //dir: 'C:\\IT\\RSS\\Stage1\\Serg\\HTML-builder\\01-read-file',
    dir: './01-read-file',
    base: 'text.txt',
});
 
var stream = new fs.ReadStream( path1 );
 
/*

stream.on('readable' , function(){
    var data = stream.read();
    console.log( data );
});

*/

function fileHandler(){

    fs.readFile( path1, 'utf8', (err, data) => {
        if(err) throw err;

        console.log(data);
        
    });

}

fileHandler() ;

stream.on('end', function(){
    console.log("THE END");
});
