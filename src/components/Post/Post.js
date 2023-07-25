import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <h5>{userId}</h5>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{body}</h5>
        </div>
    );
};

export default Post;