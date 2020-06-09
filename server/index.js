const express = require('express');
const bodyparser = require('body-parser');
const cron = require('node-cron');
const axios = require('axios');

const db = require('../db/index');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));


// ENDPOINTS
app.get('/jobs', (req, res) => {
  db.findAll((err, results) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

app.get('/search', ({ query: { keyword } }, res) => {
  db.search(keyword, (err, results) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

let port = 3500;
app.listen(port, () => console.log('Listening on port 3500'));
