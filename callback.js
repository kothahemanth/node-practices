const fs = require('fs');
fs.readFile(__filename,function cbl(err,data) {
   fs.writeFile(__filename + 'copy', data,function cb2(err){
    
   });
});
console.log('TEST');