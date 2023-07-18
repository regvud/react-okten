import React from 'react';

const UserComponent = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
          <h4>{id}</h4>
          <h4>{name}</h4>
          <h4>{username}</h4>
          <h4>{email}</h4>
        </div>
    );
};

export default UserComponent;