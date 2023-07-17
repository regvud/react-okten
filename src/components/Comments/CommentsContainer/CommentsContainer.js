import React, {useEffect, useState} from 'react';
import Comments from "../Comments";
import CommentForm from "../CommentForm/CommentForm";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()



    }
    return (
        <div>
            <CommentForm handleSubmit={handleSubmit}/>
            <Comments setComments={setComments} comments={comments}/>
        </div>
    );
};

export default CommentsContainer;