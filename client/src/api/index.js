import axios from "axios";

const API = axios.create({baseUrl: `https://my-little-project.herokuapp.com/`})



export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost );
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);