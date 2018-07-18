/**
 * Created by Sherry on 2017/9/14.
 */

// ommessage
var express = require("express");

var app = express();

app.use(express.static("on"));

app.listen(8888)
console.log("run 8888")