
/**
 * Created by Sherry on 2018/2/6.
 */

var express = require('express');
var app = express();
var axios = require('axios');


app.use(express.static('./public'))

app.listen(8001)
console.log('8001')

// axios.get('http://localhost:9001/getData').then(function (response) {
//     console.log(response);
// })