import React, {useState} from 'react';
import styles from './Comments.module.css'

const CommentsComponent = ({comment}) => {
    const [isShow, setIsShow] = useState(false)
    const {postId, id, name, email, body} = comment

    return (
        <div className={styles.main}>
            <h4>postId: {postId}</h4>
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>email: {email}</h4>
            <p><b>Body</b>: {body}</p>
            <button onClick={() => {
                setIsShow(!isShow)
            }}>{setIsShow ? 'Show' : 'Hide'}</button>
        </div>
    );
};

export default CommentsComponent;