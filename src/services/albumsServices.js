import {apiServices} from "./apiServices";
import {urls} from "../constants/urls/urls";

export const albumsServices = {
    getAll: () => apiServices.get(urls.albums.base)
}