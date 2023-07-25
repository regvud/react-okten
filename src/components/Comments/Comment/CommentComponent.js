import React from 'react';
import Post from "../../Post/Post";

const CommentComponent = ({comment, post, trigger, setTrigger, showPost}) => {
    const {postId, id, name, email, body} = comment

    return (
        <div>
            <hr/>
            <h3>postId: {postId}</h3>
            <h3>commentId: {id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{body}</h3>
            <button
                onClick={() => showPost(postId) && setTrigger(prev => !prev)}>{!trigger ? 'show post' : 'hide post'}</button>
            {post && post.id === postId && trigger ?
                <Post post={post}/> :
                false}
        </div>
    );
};

export default CommentComponent;