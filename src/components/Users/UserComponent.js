import React, {useEffect} from 'react';
import User from "./User/User";

const UserComponent = ({users, setUserId, setUsers}) => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => setUsers(users))
    }, [])
    return (
        <div>
            {users.map((user, id) => {
                return <User key={id} user={user} setUserId={setUserId}/>
            })}
        </div>
    );
};

export default UserComponent;