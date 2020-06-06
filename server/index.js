const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));



//ENDPOINTS



let port = 3500;
app.listen(port, () => console.log('Listening on port 3500'));
