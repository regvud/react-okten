import React, {useEffect, useState} from 'react';
import ApiServices from "../../services/ApiServices";
import axios from "axios";
import UserForm from "./UserForm/UserForm";
import UserComponent from "./UserComponent/UserComponent";

const Users = ({users, setUsers}) => {

    useEffect((users) => {
        axios.get('https://jsonplaceholder.typicode.com/users', users).then(users => setUsers(users.data))
    }, [])

    return (
        <>
            {users.map((user, id)=>{
                return(
                    <UserComponent user={user} key={id}/>
                )
            })}
        </>
    );
};

export default Users;