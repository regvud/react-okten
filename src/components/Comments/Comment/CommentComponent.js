import React, {useState} from 'react';
import axios from "axios";
import Post from "../../Post/Post";

const CommentComponent = ({comment}) => {
    const {postId, id, name, email, body} = comment
    const [post, setPost] = useState(null);
    const showPost = async (postId) => {
        try {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(({data}) => setPost(data))
        } catch (e) {
            console.log(e.response.data);
        }
    }
    console.log(post)
    return (
        <div>
            <hr/>
            <h3>postId: {postId}</h3>
            <h3>commentId: {id}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{body}</h3>
            <button onClick={() => showPost(postId)}>show post</button>
            {/*{post && post.id === postId ? <Post/> : false}*/}
        </div>
    );
};

export default CommentComponent;