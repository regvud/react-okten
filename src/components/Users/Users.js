import React from 'react';
import {useEffect} from "react";
import User from "./UserFormComponent/User";

const Users = ({users, setUsers, newUser}) => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(apiUsers => {
                if (newUser && newUser.name !== '') {
                    setUsers([...apiUsers, newUser])
                } else {
                    setUsers([...apiUsers])
                }
            })
    }, [newUser])
    // console.log(users)

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