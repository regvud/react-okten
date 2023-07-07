import React from 'react';
import styles from './PostComponent.module.css'

const PostComponent = (props) => {
    const {post, handlerClick} = props;
    return (
        <>
            <div className={styles.container}>
                <h5>ID: {post.id}</h5>
                <h5>Title: {post.title}</h5>
                <button onClick={() => handlerClick(post.id)}>Click</button>
            </div>
        </>
    );
};

export default PostComponent;

