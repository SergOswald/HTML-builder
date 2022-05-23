var fs = require('fs');

const path = require('path');

const path1 = path.format({
    //dir: 'C:\\IT\\RSS\\Stage1\\Serg\\HTML-builder\\01-read-file',
    dir: './01-read-file',
    base: 'text.txt',
});
 
var stream = new fs.ReadStream( path1 );
 
stream.on('readable', function(){
    var data = stream.read();
    console.log(data);
});

stream.on('end', function(){
    console.log("THE END");
});
