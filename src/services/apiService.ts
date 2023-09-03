import axios, {AxiosError, AxiosResponse} from "axios";
import {baseURL, urls} from "../constants/urls";
import {authService} from "./authService";
import {router} from "../router/router";

type TRes<DATA> = Promise<AxiosResponse<DATA>>
const apiService = axios.create({baseURL})

apiService.interceptors.request.use(req => {
    const access = authService.getAccessToken()
    req.headers.Authorization = `Bearer ${access}`

    return req
})

let isRefreshing = false

type TWaitList = () => void
const waitList: TWaitList[] = []
const subscribeToWishList = (callback: TWaitList): void => {
    waitList.push(callback)
}

const afterRefresh = (): void => {
    while (waitList.length) {
        const callback = waitList.pop();
        callback()
    }
}

apiService.interceptors.response.use(
    res => {
        return res
    },
    async (error: AxiosError) => {
        const originalRequest = error.config
        console.log(error.config)

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true
                try {
                    await authService.refresh()
                    isRefreshing = false
                    afterRefresh()
                    return apiService(originalRequest)
                } catch (e) {
                    authService.deleteTokens()
                    isRefreshing = false
                    await router.navigate('/login?SessionExpired=true')
                    return Promise.reject(error)
                }
            }

            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error)
            }

            return new Promise(resolve => {
                subscribeToWishList(() => {
                    resolve(apiService(originalRequest))
                })
            })
        }

    }
)

export {
    apiService
}

export type{
    TRes
}
