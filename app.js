const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./apiRouter').router;

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Bonjour le null...en Apis');
});

app.use('/api/', apiRouter);

app.listen(4000, function () {
    console.log('Server en Ecoute :)')
});