import React from 'react';
import axios from "axios";

export const url = 'https://jsonplaceholder.typicode.com/users'
const apiServices = axios.create({url});
export default apiServices;