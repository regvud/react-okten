import React, {useState} from 'react';
import {useEffect} from "react";
import User from "./UserFormComponent/User";

const Users = ({formValues}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => setUsers(users))
    }, [formValues])

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