import React, {useState} from 'react';
import styles from './PostComponent.module.css'
import PostComponentDetailed from "./PostComponentDetailed";

const PostComponent = ({post}) => {
    const [isShow, setIsShow] = useState(false)
    const {id, title} = post
    return (
        <>
            <div className={styles.container}>
                <h5>ID: {id}</h5>
                <h5>Title: {title}</h5>
                {/*//     Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}
                <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
                {isShow && <PostComponentDetailed key={id} post={post}/>}
            </div>
        </>
    );
};

export default PostComponent;

