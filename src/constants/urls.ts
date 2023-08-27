const baseURL = process.env.REACT_APP_API

const cars = '/cars'
const auth = '/auth'
const users = '/users'

const urls = {
    cars: {
        base: cars,
        byID: (id: number): string => `${cars}/${id}`
    },
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        register: users,
        me: `${users}/me`
    }
}

export {
    urls,
    baseURL
}