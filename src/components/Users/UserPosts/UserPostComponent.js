import React from 'react';
import styles from '../../Posts/PostComponent.module.css'
const UserPostComponent = ({userPost}) => {
    const {userId, id, title, body} = userPost
    return (
        <div className={styles.child}>
            <h4>{userId}</h4>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{body}</h4>
        </div>
    );
};

export default UserPostComponent;