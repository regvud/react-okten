import React from 'react';
import {useEffect} from "react";
import User from "./UserFormComponent/User";

const Users = ({users, setUsers, newUser, setIncrementId, incrementId}) => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(apiUsers => {
                setUsers(apiUsers)


                // плохая верификация
                if (newUser && newUser.name !== '') {
                    setUsers(prevState => [...prevState, newUser])
                }
            })
    }, [newUser])
    // console.log(users)

    return (
        <div>
            {users.map((user, id) => {



                // сделать что-нибудь
                setIncrementId(id + 1)
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