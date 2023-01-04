import axios from "axios";

const apiConnection = axios.create({
    baseURL: "http://127.0.0.1:5000/api",
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

export const getPlaylistById = (playlist_id: number) => {
    // ***TO DO*** error handling for invalid playlist_id
    return apiConnection.get(`/playlists/${playlist_id}`).then((res) => {
        return res.data.playlist;
    });
};

export const postNewPlaylist = (
    name: string,
    description: string,
    location: string,
    cuisine: string,
    owner_email: string,
    restaurants: string[]
) => {
    return apiConnection
        .post("/playlists", {
            name,
            description,
            location,
            cuisine,
            owner_email,
        })
        .then((response) => {
            const newPlaylistId = response.data.playlist.playlist_id;
            return apiConnection.post(
                `/playlists/${newPlaylistId}/restaurants`,
                { place_ids: restaurants }
            );
        });
};
