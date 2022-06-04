import axios from "axios"

const URL = "http://localhost:5000/api/"
const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token

export const publicReq = axios.create({
    baseURL: URL
})

export const userReq = axios.create({
    baseURL: URL,
    headers: {token:`${Token}`}
})