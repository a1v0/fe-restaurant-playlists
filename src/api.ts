import axios from "axios";

const apiConnection = axios.create({
    baseURL: "http://127.0.0.1:5000/api"
})

export const getPlaylists = () => {
    return apiConnection
    .get("/", {}) // SHOULD BE /playlists amend in backend
    .then((res) => {
        return res.data
    })
}