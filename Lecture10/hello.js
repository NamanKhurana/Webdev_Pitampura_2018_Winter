console.log('file starts')
const lib = require('./lib2.js')
const lib2 = require('./lib2.js')
const libb = require('./libb')
const liba = require('./liba')

lib.hello('World')
// lib.goodBye('World')
console.log(lib)
console.log(lib2)
console.log(lib == lib2)

console.log(liba)
console.log(libb)
console.log(liba.libb.beta)
