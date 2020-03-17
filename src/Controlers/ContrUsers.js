const url = require('url');


const state = {
    users: [
        {
            id: "1",
            fullName: "Artur React",
            location: "Reactino, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png"
        },
        {
            id: "2",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: ""
        },
        {
            id: "3",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png"
        },
        {
            id: "4",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png"
        },
        {
            id: "5",
            fullName: "Artur React",
            location: "Kyiv, Ukraine",
            userPic: "https://cdn.the-scientist.com/assets/articleNo/65851/aImg/31893/spinyfin-s.png"
        }
    ]

}


exports.ContrUsers = function (req, responce) {
    let queryData = url.parse(req.url, true).query;

    let docs = {
        users: [],
        totalCount: state.users.length
    }
    for(let i = ((queryData.page - 1) * queryData.size) ;i < queryData.page * queryData.size; i++) {
        if(state.users[i]) docs.users.push(state.users[i]);
    }
    console.log(...docs.users)
    responce.send(JSON.stringify(docs));
}
