import React from 'react';
import axios from "axios";

const ApiServices = {
    postUser: (data) => {
        axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            headers: {'content-type': 'application/json'},
            data: JSON.stringify(data)
        }).then(value => console.log(value.data))
    }
};


export default ApiServices;