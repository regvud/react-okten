import React from 'react';
import styles from './PostComponent.module.css'

const PostComponent = (props) => {
    const {post, handlerClick} = props;
    const {userId, id, title, body} = post
    return (
        <>
            <div className={styles.container}>
                <h5>ID: {id}</h5>
                <h5>Title: {title}</h5>
                <button onClick={() => handlerClick(id)}>Click</button>
            </div>
        </>
    );
};

export default PostComponent;

