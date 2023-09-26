import axios from "axios";

export const signin = (obj) => {
    let response =  axios.post("https://localhost:44383/api/User/Login", obj);
    return response;
}


export const signup = (obj) => {
    let response = axios.post('https://localhost:44383/api/User/register', obj);
    return response;
}