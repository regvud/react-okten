import {useEffect, useState} from "react";

// створити хук useFetch, котрий спроможний робити запит на jsonplaceholder на /users, /posts, /comments в залежності від аргументу.
//     Сигнатура хука function(endpoint)

export const useFetch = (endpoint) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            .then(value => value.json())
            .then(value => {
                setData(value)
            })
    }, []);
    return data
}
