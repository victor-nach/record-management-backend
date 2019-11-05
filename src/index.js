const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors);

app.use('/', routes);

app.get('/', (req, res) => {
  res.status(201).json({
    message: 'welcome !',
  });
});

app.listen(PORT);

module.exports = app;
