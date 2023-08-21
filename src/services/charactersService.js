import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const charactersService = {
    getAll: () => apiService.get(urls.characters.base)
}

export {
    charactersService
}