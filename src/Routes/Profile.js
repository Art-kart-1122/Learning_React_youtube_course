const express = require('express');
const Router = express.Router();
const Profile = require('../Controlers/ContrProfile');

Router.get('/fullProfile', Profile.ContrProfile);
Router.put('/:IdProfileStatus', Profile.ContrUpdateStatus);

module.exports = Router;