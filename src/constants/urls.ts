const baseURL = process.env.REACT
const urls = {
    cars: {
        base: '/cars',
        byID: (id): number => `${urls.cars.base}/${id}`
    }
}

export {
    urls
}