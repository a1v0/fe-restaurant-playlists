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

export const postUser = (
    user_email: string,
    nickname: string,
    avatar_url: string
) => {
    const newUser = {
        user_email: user_email,
        nickname: nickname,
        avatar_url: avatar_url,
    };
    return apiConnection.post("/users", newUser).then((res) => {
        return res.data.user;
    });
};

export const getPlaylistByUser = (user_email: string) => {
    return apiConnection.get(`/users/${user_email}/playlists`).then((res) => {
        return res.data.playlists;
    });
};

export const deletePlaylistById = (playlist_id: number) => {
    return apiConnection.delete(`/playlists/${playlist_id}`);
};
