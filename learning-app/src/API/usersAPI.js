import * as axios from "axios";
const baseURL = '/api/users?'

export const usersAPI = {
    getUsers(currentPage, countOnPageItems) {
        return axios.get(`${baseURL}page=${currentPage}&size=${countOnPageItems}`)
            .then(response => response.data);
    }
}