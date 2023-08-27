import {IAuth} from "../interfaces/authInterface";
import {apiService, TRes} from "./apiService";
import {IUser} from "../interfaces/userInterface";
import {urls} from "../constants/urls";
import {IToken} from "../interfaces/tokensInterface";

const accessToken = 'access'
const refreshToken = 'refresh'

const authService = {
    register(user: IAuth): TRes<IUser> {
        return apiService.post(urls.auth.register, user)
    },

    async login(user: IAuth): Promise<IUser> {
        const {data} = await apiService.post<IToken>(urls.auth.login, user)
        this.setTokens(data)
        const {data: me} = await this.getMe()
        return me
    },

    async refresh(): Promise<void> {
        const refresh = this.getRefreshToken()
        const {data} = await apiService.post(urls.auth.refresh, {refresh})
        this.setTokens(data)
    },

    getMe(): TRes<IUser> {
        return apiService.get(urls.auth.me)
    },

    setTokens({access, refresh}: IToken): void {
        localStorage.setItem(accessToken, access)
        localStorage.setItem(refreshToken, refresh)
    },

    deleteTokens(): void {
        localStorage.removeItem(accessToken)
        localStorage.removeItem(refreshToken)
    },

    getRefreshToken(): string {
        return localStorage.getItem(refreshToken)
    },

    getAccessToken(): string {
        return localStorage.getItem(accessToken)
    }


}

export {
    authService
}

