const express = require('express');
const Router = express.Router();
const ContrDataMe = require('../Controlers/ContrDataMe');

Router.get('/me', ContrDataMe.ContrDataMe);
Router.post('/login', ContrDataMe.ContrLogin);
Router.delete('/logout', ContrDataMe.ContrLogout);

module.exports = Router;