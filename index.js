const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');
const Users = require('./src/Routes/Users');
const Profile = require('./src/Routes/Profile');
const DataMe = require('./src/Routes/DataMe');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));






app.use('/api', Users);
app.use('/profile', Profile);
app.use('/userData', DataMe);






// 404
app.use(function(req, res, next) {
    return res.status(404).send({ message: '404 Route'+req.url+' Not found.' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
});

app.listen(5000, () => console.log('Example app listening on port 5000!'));