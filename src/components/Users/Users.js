import React, {useEffect, useState} from 'react';
import ApiServices from "../../services/ApiServices";
import axios from "axios";
import UserForm from "./UserForm/UserForm";

const Users = () => {
    // const [user, addUser] = useState(null);
    //
    // const newUser = ApiServices.postUser()
    // useEffect(() => {
    //     addUser(newUser)
    // }, [])
    //
    // console.log(user)


    useEffect((data) => {
        axios.post('https://jsonplaceholder.typicode.com/users', data).then(data => setUser(data))
    }, [])

    return (
        <>
        </>
    );
};

export default Users;