import React from 'react';
import User from "./User/User";

const Users = ({users, setUserId}) => {
    return (
        <div>
            {users.map((user, id) => {
                return <User key={id} user={user} setUserId={setUserId}/>
            })}
        </div>
    );
};

export default Users;