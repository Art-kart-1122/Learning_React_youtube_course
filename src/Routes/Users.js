const express = require('express');
const Router = express.Router();
const Users = require('../Controlers/Users');

Router.get('/all', Users.ContrUsers);

module.exports= Router;