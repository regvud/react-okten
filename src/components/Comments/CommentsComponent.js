import React, {useState} from 'react';
import styles from './Comments.module.css'
import PostComponent from "../Posts/PostComponent";

const CommentsComponent = ({comment, deleteComment}) => {
    const [isShow, setIsShow] = useState(false)
    const {postId, id, name, email, body} = comment

    return (
        <div className={styles.main}>
            <h3>COMMENT INFO</h3>
            <hr/>
            <h4>postId: {postId}</h4>
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>email: {email}</h4>
            <p><b>Body</b>: {body}</p>
            <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
            {isShow && <PostComponent key={id} commentId={postId}/>}
            <button onClick={() => deleteComment(id)}>Delete</button>
        </div>
    );
};

export default CommentsComponent;