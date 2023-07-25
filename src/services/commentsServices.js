import {apiServices} from "./apiServices";
import {urls} from "../constants/urls/urls";

export const commentsServices = {
    getAll: () => apiServices.get(urls.comments.base),
    getPost: (postId) => apiServices.get(`${urls.posts.base}/${postId}`)
}