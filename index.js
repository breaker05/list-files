
const serveIndex = require('serve-index');

const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('D:\\tools'), serveIndex('D:\\tools', {'icons': true}));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
