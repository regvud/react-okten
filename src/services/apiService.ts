import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants/urls";

type TRes<DATA> = Promise<AxiosResponse<DATA>>
const apiService = axios.create({baseURL})

export {
    apiService
}

export type{
    TRes
}
