import * as axios from "axios";


const instance = axios.create({
    baseURL: '/userData/'
})

export const myUserDataAPI = {
    getMyUserData(pass) {
        return instance.get(`me?pass=${pass}`)
            .then(response => response.data);
    },
    login(data) {
        return instance.post('login', JSON.stringify({"data": data}),{
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.data)
    },
    logout() {
        return instance.delete('logout')
            .then(response => response.data)
    }
}