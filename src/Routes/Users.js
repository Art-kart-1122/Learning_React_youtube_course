const express = require('express');
const Router = express.Router();
const Users = require('../Controlers/ContrUsers');

Router.get('/users', Users.ContrUsers);


module.exports= Router;