const crypto = require('crypto');

console.log('base64:',crypto.createHash('sha512').update('rlaehddnr').digest('base64'));
console.log('hex:',crypto.createHash('sha512').update('rlaehddnr').digest('hex'));
console.log('base64:',crypto.createHash('sha512').update('ehddnr').digest('base64'));