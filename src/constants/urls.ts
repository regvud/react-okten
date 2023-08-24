const baseURL = process.env.REACT_APP_API
const urls = {
    cars: {
        base: '/cars',
        byID: (id: number): string => `${urls.cars.base}/${id}`
    }
}

export {
    urls,
    baseURL
}