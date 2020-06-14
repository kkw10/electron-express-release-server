const { localConf } = require('./local');

module.exports = (app) => {
  if (!app) {
    throw new Error('There is no express app object');
  }

  Object.keys(localConf).map((key) => {
    app.set(key, localConf[key]);
  })
}