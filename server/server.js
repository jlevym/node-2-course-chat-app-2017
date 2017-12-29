const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public')
var app = express();



app.use(express.static(publicPath))
// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

app.listen(4000, () => {
  console.log('server is up on  localhost:4000');
});
