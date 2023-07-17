import React, {useState} from 'react';
import Comments from "../Comments";
import CommentForm from "../CommentForm/CommentForm";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])
    console.log(comments)
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <Comments setComments={setComments} comments={comments}/>
        </div>
    );
};

export default CommentsContainer;