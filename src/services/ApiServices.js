import React from 'react';
import axios from "axios";

const ApiServices = {
    postUser: (data) => {
        return axios.post('https://jsonplaceholder.typicode.com/users', data).then(data => data)
    }
};

export default ApiServices;