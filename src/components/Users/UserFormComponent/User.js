import React from 'react';

const User = ({user}) => {
    const {id, name, surname, email} = user
    return (
        <div>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h4>{surname}</h4>
            <h4>{email}</h4>
            <br/>
        </div>
    );
};

export default User;