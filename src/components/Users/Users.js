import React from 'react';
import {useEffect} from "react";
import User from "./UserFormComponent/User";

const Users = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => console.log(users))
    }, [])

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