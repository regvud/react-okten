import React from 'react';
import User from "./User/User";

const Users = ({users}) => {
    return (
        <div>
            {users.map((user, id) => {
                return <User key={id} user={user}/>
            })}
        </div>
    );
};

export default Users;