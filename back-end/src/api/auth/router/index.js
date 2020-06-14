const express = require('express');
const AuthRouter = express.Router();
const { Login } = require('../controller/auth.ctrl');

AuthRouter.post('/login', Login);

module.exports = AuthRouter;