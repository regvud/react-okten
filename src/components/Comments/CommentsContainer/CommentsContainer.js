import React, {useEffect, useState} from 'react';
import Comments from "../Comments";
import CommentForm from "../CommentForm/CommentForm";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                headers: {
                    'content-type': 'Application/json'
                },
                body: JSON.stringify(comments)
            })
                .then(value => value.json())
                .then(comments => console.log(comments))
        }, [])

    }
    return (
        <div>
            <CommentForm handleSubmit={handleSubmit}/>
            <Comments setComments={setComments} comments={comments}/>
        </div>
    );
};

export default CommentsContainer;