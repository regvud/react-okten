import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const episodesService = {
    getAll: () => apiService.get(urls.episodes.base)
}

export {episodesService}