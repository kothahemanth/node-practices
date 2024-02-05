const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
async function main() {
    const data = await readFile(__filename);
    console.log('File data is', data)
}
main();
console.log('TEST');