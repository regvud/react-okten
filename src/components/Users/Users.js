import React, {useEffect, useState} from 'react';
import User from "./User/User";

//     #Advance
//
//     вивести всіх юзерів з плайсхолдеру
//     в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
//     пости мають виводитись під компонетою Users (в App компоненті)
const Users = ({setUserId}) => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => setUser(users))
    }, [])

    return (
        <>
            {users.map((user, id) => {
                return (
                    <>
                        <User key={id} user={user} setUserId={setUserId}/>
                    </>
                )
            })}
        </>
    );
};

export default Users;