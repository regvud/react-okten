import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent";

const PostContainer = ({commentId}) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${commentId}`).then(res => res.json()).then(post => setPost(post))
    }, [commentId])

    return <PostComponent key={commentId} post={post}/>

};

export default PostContainer;