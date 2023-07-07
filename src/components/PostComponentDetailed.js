import styles from "./PostComponent.module.css";
import React from "react";


const PostComponentDetailed = (props) => {
    const {post} = props;
    const {userId, id, title, body} = post

    return (
        <>
            <div className={styles.container}>
                <h5>UserID: {userId}</h5>
                <h5>ID: {id}</h5>
                <h5>Title: {title}</h5>
                <h5>Body: {body}</h5>
            </div>
        </>
    );
};
export default PostComponentDetailed;