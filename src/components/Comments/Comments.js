import React, {useEffect} from 'react';
import CommentsComponent from "./CommentsContainer/CommentsComponent";

const Comments = ({comments, setComments}) => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => setComments(comments))
    }, [])

    return (
        <div>
            {comments.map((comment, id) => {
                return (
                    <CommentsComponent comment={comment} key={id}/>
                )
            })}
        </div>
    );
};

export default Comments;