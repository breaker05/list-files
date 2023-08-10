const express = require('express');
const serveIndex = require('serve-index');
const auth = require('http-auth');
const authConnect = require("http-auth-connect");

var basic = auth.basic({
  realm: 'SUPER SECRET STUFF'
}, function (username, password, callback) {
  callback(username == '' && password == '')
});

const app = express();
const port = 3001;

app.use(authConnect(basic));

app.use('/', express.static('D:\\tools'), serveIndex('D:\\tools', {'icons': true}));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
