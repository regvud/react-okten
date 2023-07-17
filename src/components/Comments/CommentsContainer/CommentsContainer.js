import React, {useEffect, useState} from 'react';
import Comments from "../Comments";
import CommentForm from "../CommentForm/CommentForm";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    return (
        <div>
            <CommentForm/>
            <Comments setComments={setComments} comments={comments}/>
        </div>
    );
};

export default CommentsContainer;