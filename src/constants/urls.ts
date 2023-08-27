const baseURL = process.env.REACT_APP_API

const cars = '/cars'
const urls = {
    cars: {
        base: cars,
        byID: (id: number): string => `${cars}/${id}`
    }
}

export {
    urls,
    baseURL
}