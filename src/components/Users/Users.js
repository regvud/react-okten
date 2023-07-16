import React, {useState} from 'react';
import {useEffect} from "react";
import User from "./UserFormComponent/User";

const Users = ({users, setUsers, userOnSave}) => {

    useEffect((userOnSave) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => setUsers(users))
    }, [userOnSave])

    return (
        <div>
            {users.map((user, id) => {
                return (
                    <>
                        <User user={user} key={id}/>
                    </>
                )
            })}

        </div>
    );
};

export default Users;