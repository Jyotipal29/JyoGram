import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5500" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const signin = (FormData) => API.post("/users/signin", FormData);
export const signup = (FormData) => API.post("/users/signup", FormData);
