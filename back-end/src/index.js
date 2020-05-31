const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static(path.resolve(__dirname, '../../front-end/build')));

app.use('/api/auth', (req, res) => {
  res.send('API : auth');
})
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