const baseURL = 'https://rickandmortyapi.com/api'

const urls = {
    episodes: {
        base: '/episode',
        byID: (id) => `${urls.episodes.base}/${id}`
    }
}

export {
    baseURL, urls
}