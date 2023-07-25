import React, {useState} from 'react';
import Comments from "../Comments";
import {commentsServices} from "../../../services/commentsServices";

const CommentsContainer = () => {
    const [comments, setComments] = useState(null);
    const [post, setPost] = useState(null);
    const [trigger, setTrigger] = useState(false);

    const showPost = async (postId) => {
        try {
            await commentsServices.getPost(postId).then(({data}) => setPost(data))
        } catch (e) {
            console.log(e.response.data);
        }
    }
    return (
        <div>
            <Comments
                comments={comments}
                setComments={setComments}
                post={post}
                setPost={setPost}
                trigger={trigger}
                setTrigger={setTrigger}
                showPost={showPost}
            />
        </div>
    );
};

export default CommentsContainer;