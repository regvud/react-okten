import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const charactersService = {
    byIDs: (ids) => apiService.get(urls.characters.byID(ids))
}

export {
    charactersService
}