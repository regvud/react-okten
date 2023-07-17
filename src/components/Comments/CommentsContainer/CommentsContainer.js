import React, {useEffect, useState} from 'react';
import Comments from "../Comments";

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
        })
    }
    return (
        <div>
            <Comments setComments={setComments} comments={comments} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default CommentsContainer;