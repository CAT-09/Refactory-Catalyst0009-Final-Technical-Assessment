const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

// Instanciation
const app = express();
const port = 2000;

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Settings
app.set('views', path.join('views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, resp) => {
  resp.status(404).send('Page does not exist');
});

// Server
app.listen(port, () => {
  console.log(`The server is live on port number ${port}`);
});
