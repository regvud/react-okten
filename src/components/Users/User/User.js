import React from 'react';
import UserDetails from "./UserDetails";
import UserAddress from "./UserAddress";

const User = ({user}) => {
    return (
        <div>
            <UserDetails id={user.id} email={user.email} name={user.name} username={user.username}/>
            <UserAddress address={user.address}/>
        </div>
    );
};

export default User;