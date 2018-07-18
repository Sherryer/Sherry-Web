/**
 * Created by Sherry on 2018/2/6.
 */
var url = require('url')
var express = require('express')
var app = express()

app.all('*', function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Methods', 'POST, GET')
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  // res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/getData', function (req, res) {
  console.log(url.parse(req.url, true).query)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.writeHead(200, {'Content-type': 'text/html;charset=UTF-8'})
  res.end('hello data')
}).listen(9001)

console.log('9001')
