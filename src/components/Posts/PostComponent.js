import React, {useEffect, useState} from 'react';
import styles from '../Comments/Comments.module.css'

const PostComponent = ({commentId}) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${commentId}`).then(res => res.json()).then(post => setPost(post))
    }, [commentId])

    return (
        <div className={styles.sub}>
            <h5>POST INFO</h5>
            <hr/>
            <h6>UserID: {post.userId}</h6>
            <h6>ID: {post.id}</h6>
            <h6>Title: {post.title}</h6>
            <h6>Body: {post.body}</h6>
        </div>
    );
};

export default PostComponent;