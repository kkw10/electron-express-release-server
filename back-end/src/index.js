// Thirdparty Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const setConfig = require('../config');

// API Routers
const { AuthRouter } = require('./api');

const app = new express();
setConfig(app);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../../front-end/build')));

app.use('/api/auth', AuthRouter);
app.use('/api/download', (req, res) => {
  res.send('API : donwload');
})
app.use('/api/update', (req, res) => {
  res.send('API : update');
})
app.use('/api/notes', (req, res) => {
  res.send('API : notes');
})
app.use('/api/version', (req, res) => {
  res.send('API : version');
})
app.use('/api/versions', (req, res) => {
  res.send('API : versions');
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../front-end/build', 'index.html'));
});

const PORT = 1990;
app.listen(PORT, () => {
  console.log(`[@@@ Electron My Server is running on ${PORT}port @@@]`);
});