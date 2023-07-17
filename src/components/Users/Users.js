import React from 'react';
import {useEffect} from "react";
import User from "./UserFormComponent/User";
import user from "./UserFormComponent/User";

const Users = ({users, setUsers, newUsers, setIncrementId, setApiUsers, incrementId}) => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(apiUsers => {
                setApiUsers(apiUsers)

                if (newUsers) {
                    setUsers([...apiUsers, ...newUsers])
                }
            })
    }, [newUsers])

    setIncrementId(users.length)
    return (
        <div>
            {users?.map((user, id) => {
                return (
                    <>
                        <User user={user} key={id} incrementId={incrementId}/>
                    </>
                )
            })}

        </div>
    )
        ;
};

export default Users;