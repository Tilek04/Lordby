import axios from 'axios';

const instance = axios.create({
    baseURL: "https://berlin-backender.org.kg/lorby/authentication"
});


export const API = "https://berlin-backender.org.kg/lorby/authentication";
export default instance;