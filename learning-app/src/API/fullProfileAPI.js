import * as axios from "axios";
const baseURL = '/profile/fullProfile?id='

export const fullProfileAPI = {
    getFullProfile(userId) {
      return axios.get(baseURL + userId)
          .then(response => response.data);
    }
}


