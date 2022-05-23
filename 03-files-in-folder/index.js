var fs = require('fs');

/*

const path = require('path');

const path1 = path.format({
    dir: 'F:\\5-IT\\RSS\\Stage-1\\HTML-builder\\03-write-file\\secret-folder',
    base: 'text.txt',
});

*/

fs.readdir("./secret-folder", (err, data) => {
	if(err) { throw err } ;
  	console.log(data) ;
})