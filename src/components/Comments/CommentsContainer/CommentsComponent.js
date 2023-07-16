import React from 'react';

const CommentsComponent = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div style={{border:'1px solid red', margin:'5px', padding:'5px'}}>
            <h4>{postId}</h4>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{body}</h4>
        </div>
    );
};

export default CommentsComponent;