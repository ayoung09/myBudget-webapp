'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');

const app = express();

module.exports = app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())

  .use(express.static(resolve(__dirname, '..', 'public')))
  .use(express.static('./public/css'))

  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  .use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
    next();
    });

app.listen(1337, () => {
  console.log('--- The server is listening on port 1337 ---');
});

