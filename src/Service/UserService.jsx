import axios from "axios";

export const signin = (obj) => {
    let response =  axios.post("https://localhost:44383/api/User/Login", obj);
    return response;
}

// export const loginApi = (loginObj) => {
//     //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
//      let response = axios.post("https://localhost:7102/api/controller/api/Login", loginObj)
//     return response
// }

export const signup = async (obj) => {
    let response = await axios.post('https://localhost:44383/api/User/Login', obj);
    return response;
}