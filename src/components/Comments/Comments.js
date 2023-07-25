import React, {useEffect} from 'react';
import CommentComponent from "./Comment/CommentComponent";
import {commentsServices} from "../../services/commentsServices";

const Comments = ({comments, setComments, post, showPost, trigger, setTrigger, setPost}) => {

    useEffect(() => {
        commentsServices.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {comments?.map((comment, id) => (
                <CommentComponent
                    comment={comment}
                    key={id}
                    setPost={setPost}
                    post={post}
                    setTrigger={setTrigger}
                    trigger={trigger}
                    showPost={showPost}
                />))}
        </div>
    );
};

export default Comments;