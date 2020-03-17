import * as axios from "axios";

const instance = axios.create({
    baseURL: '/profile/',
    headers: {"Content-Type": "text/plain"}
})


export const fullProfileAPI = {
    getFullProfile(userId) {
      return instance.get(`fullProfile?id=${userId}`)
          .then(response => response.data);
    },
    updateProfileStatus(userId, newStatus) {
        /*const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: JSON.stringify({newPost: newStatus}),
            url:`/profile/:${userId}`
        };
        axios(options)*/
        return axios.put(`/profile/${userId}`, JSON.stringify({newStatus: newStatus}),{
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.data)

    }
}


