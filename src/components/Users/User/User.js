import React, {useState} from 'react';
import styles from '../../Posts/PostComponent.module.css'

const User = ({user, setUserId}) => {
    const {id, name, username, email} = user
    return (
        <div className={styles.container}>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h4>{username}</h4>
            <h4>{email}</h4>
            <button onClick={()=>setUserId(id)}>Posts</button>
        </div>
    );
};

export default User;