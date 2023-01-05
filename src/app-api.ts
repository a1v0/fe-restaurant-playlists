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

export const postVote = (playlistId: number, voteCount: number) => {
    const body = { playlist_id: playlistId, vote_count: voteCount };
    return apiConnection.post(`/votes`, body).then((response) => {
        return response.data.votes;
    });

export const deleteRestaurantFromPlaylist = (
    playlist_id: number,
    place_id: string
) => {
    return apiConnection.delete(
        `/playlists/${playlist_id}/restaurants/${place_id}`
    );

};
