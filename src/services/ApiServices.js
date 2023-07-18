import React from 'react';
import axios from "axios";

export const ApiServices = {
    postUser: (user) => {
        axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            headers: {'content-type': 'application/json'},
            data: JSON.stringify(user)
        }).then(user => {
            localStorage.removeItem('postUser')
            localStorage.setItem('postUser', JSON.stringify(user.data))
        })
    },
    getUsers: () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(users => localStorage.setItem('users', JSON.stringify(users.data)))

    }
};


export default ApiServices;