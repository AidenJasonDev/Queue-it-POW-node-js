const crypto = require('crypto')
const utf8 = require('utf8');


let input = "f02b931c-52f0-4507-9406-f1221678dc16"
let zeroNum = 4

function getHash(input,zeroNum) {
    let zeros = '0'.repeat(zeroNum);

    let postfix = 0;

    while(true) {
         postfix++;
         postfixString = postfix.toString() 
         str = input + postfixString
         hashEncoded = crypto.createHash('sha256').update(utf8.encode(str)).digest('hex')
         if(hashEncoded.startsWith(zeros)) {
             return { "postfix":postfix, "hash": hashEncoded }
         }
    }
}


console.log(getHash(input, zeroNum))
