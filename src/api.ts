import axios from "axios";

const apiConnection = axios.create({
    baseURL: "http://127.0.0.1:5000/api"
});

export const getPlaylists = (
    location: string | null,
    cuisine: string | null
) => {
    return apiConnection
        .get("/playlists", { params: { location, cuisine } })
        .then((res) => {
            return res.data.playlists;
        });
};
