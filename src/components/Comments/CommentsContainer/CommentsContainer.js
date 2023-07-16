import React, {useState} from 'react';
import Comments from "../Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])
    return (
        <div>
            <Comments setComments={setComments} comments={comments}/>
        </div>
    );
};

export default CommentsContainer;