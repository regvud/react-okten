import React, {useEffect, useState} from 'react';
import axios from "axios";
import CommentComponent from "./Comment/CommentComponent";

const Comments = () => {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            {comments?.map((comment, id) => (<CommentComponent comment={comment} key={id}/>))}
        </div>
    );
};

export default Comments;