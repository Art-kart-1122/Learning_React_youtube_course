const url = require('url');

const state = {
    users: [
        {
            id: "1",
            fullName: "Artur React",
            location: "Reactino, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png",
            Profilestatus: "Learning React app1"
        },
        {
            id: "2",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: "./public/images/fish.jpeg",
            Profilestatus: "Learning React app"
        },
        {
            id: "3",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png",
            Profilestatus: "Learning React app"
        },
        {
            id: "4",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png",
            Profilestatus: "Learning React app"

        },
        {
            id: "5",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png",
            Profilestatus: "Learning React app"
        }
    ]

}


exports.ContrProfile = function (req, responce) {
    let queryData = url.parse(req.url, true).query;

    let docs = {
        profile: state.users[queryData.id -1]
    }
    responce.send(JSON.stringify(docs));
}

exports.ContrUpdateStatus= (request, response) => {
    state.users = state.users.map(item => {

        if(item.id === request.params.IdProfileStatus) {
            item.Profilestatus = request.body.newStatus;
            return item;
        }
        return item
    })
    response.send(JSON.stringify({resultCode: 0}))

}