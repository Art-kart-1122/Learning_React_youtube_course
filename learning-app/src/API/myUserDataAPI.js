import * as axios from "axios";
const baseURL = '/userData/me?pass=';


export const myUserDataAPI = {
    getMyUserData(pass) {
        return axios.get(baseURL + pass)
            .then(response => response.data);
    }
}