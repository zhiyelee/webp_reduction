'use strict';
const express = require('express');
const path = require('path');
const debug = require('debug')('webp');

const app = express();
app.set('view engine', 'pug');

app.get('/webp.png', function (req, res) {
  const accepts = req.accepts();
  const isWebpSupported = accepts.indexOf('image/webp') !== -1;

  debug('Received header:', req.accepts(), `isWebpSupported: ${isWebpSupported}`);

  let f = 'webp.png';
  if (isWebpSupported) {
    f = 'webp.webp';
  }

  f = path.resolve('./static', f);
  debug(`Server is serving file: ${f}`)

  res.sendFile(f)
});

app.get('/', function (req, res) {
  res.render('index')
});

app.listen(3005);
