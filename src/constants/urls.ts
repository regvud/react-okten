const baseURL = process.env.REACT_APP_API

const cars = '/cars'
const carPhoto = '/photo'
const auth = '/auth'
const users = '/users'

const urls = {
    cars: {
        base: cars,
        byID: (id: number): string => `${cars}/${id}`,
        photoByID: (id: number, photo: string): string => `${cars}/${id}${carPhoto}`
    },
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        register: users,
        me: `${auth}/me`
    }
}

export {
    urls,
    baseURL
}