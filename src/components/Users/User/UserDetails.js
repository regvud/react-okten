import React from 'react';

const UserDetails = ({id, name, username, email}) => {
    return (
        <div>
            <h4>ID: {id}</h4>
            <h4>name: {name}</h4>
            <h4>username: {username}</h4>
            <h4>email: {email}</h4>
        </div>
    );
};

export default UserDetails;