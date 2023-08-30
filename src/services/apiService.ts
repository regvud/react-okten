import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants/urls";
import {authService} from "./authService";

type TRes<DATA> = Promise<AxiosResponse<DATA>>
const apiService = axios.create({baseURL})

apiService.interceptors.request.use(req => {
    const access = authService.getAccessToken()
    req.headers.Authorization = `Bearer ${access}`

    return req
})

export {
    apiService
}

export type{
    TRes
}
