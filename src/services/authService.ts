import {IAuth} from "../interfaces/authInterface";
import {apiService, TRes} from "./apiService";
import {IUser} from "../interfaces/userInterface";
import {urls} from "../constants/urls";

const authService = {
    register(user: IAuth): TRes<IUser>{
        return apiService.post(urls.auth.register, user)
    }
}

export {
    authService
}

