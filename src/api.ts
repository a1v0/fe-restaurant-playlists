import axios from "axios";

const apiConnection = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

export const getPlaylists = () => {
  return apiConnection.get("/playlists", {}).then((res) => {
    return res.data.playlists;
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
