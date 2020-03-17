const url = require('url');
const docs1 = {
    fullName: 'Artur drop',
    location: 'turki',
    isAuth: true,
    id: '2'
}

const docs2 = {
    fullName: 'Artur drop',
    location: 'turki',
    isAuth: false,
    id: '2'
}

exports.ContrDataMe = (req, res) => {
    let queryData = url.parse(req.url, true).query;
    console.log(queryData.pass)
    if(queryData.pass === 'yes') res.send(JSON.stringify(docs1)) ;
        res.send(JSON.stringify(docs2));

}

exports.ContrLogin = (req, res) => {
    if(req.body.data.login !== 'artur') res.send(JSON.stringify({resultCode: 1}))
    res.send(JSON.stringify({resultCode: 0}))

}

exports.ContrLogout = (req, res) => {

    res.send(JSON.stringify({resultCode: 0}))

}


