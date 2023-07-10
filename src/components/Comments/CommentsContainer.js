import React, {useEffect, useState} from 'react';
import CommentsComponent from "./CommentsComponent";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(comments => setComments(comments))
    }, [])


    return (
        <>
            {comments.map((comment, id) => {
                return <CommentsComponent key={id} comment={comment}/>
            })}
        </>
    );
};

export default CommentsContainer;