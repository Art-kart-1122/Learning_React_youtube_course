import * as axios from "axios";


const instance = axios.create({
    baseURL: '/api/'
})


export const usersAPI = {
    getUsers(currentPage, countOnPageItems) {
        return instance.get(`users?page=${currentPage}&size=${countOnPageItems}`)
            .then(response => response.data);
    }
}