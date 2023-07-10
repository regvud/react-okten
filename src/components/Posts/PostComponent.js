import React from 'react';
import styles from "../Comments/Comments.module.css";

const PostComponent = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div className={styles.sub}>
                <h5>POST INFO</h5>
                <hr/>
                <h6>UserID: {userId}</h6>
                <h6>ID: {id}</h6>
                <h6>Title: {title}</h6>
                <h6>Body: {body}</h6>
            </div>
        </div>
    );
};

export default PostComponent;