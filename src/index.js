var obj = {a:1, b:{c:1}}
var qs = require('qs')

var str = qs.stringify(obj)

var o = qs.parse(str)

console.log(str)
console.log(o)