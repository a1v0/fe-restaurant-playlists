import axios from "axios";

const apiConnection = axios.create({
    baseURL: "http://127.0.0.1:5000/api"
});

export const getPlaylists = () => {
    return apiConnection.get("/playlists").then((res) => {
        return res.data.playlists;
    });
};

export const getPlaylistById = (playlist_id: number) => {
    // ***TO DO*** error handling for invalid playlist_id
    return apiConnection.get(`/playlists/${playlist_id}`).then((res) => {
        return res.data.playlist;
    });
};
