import React from 'react';

const UserPostComponent = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <h3>userid: {userId}</h3>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
            <h3>body: {body}</h3>
        </div>
    );
};

export default UserPostComponent;