import React from 'react';
import apiServices, {url} from "./apiServices";

const userServices = {
    getAll: () => (apiServices.get(url)),
    postUser: (url, user) => (apiServices.post(url, {...user}))
};

export default userServices;