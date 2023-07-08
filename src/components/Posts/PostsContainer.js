import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent";

const PostsContainer = () => {
    const [posts, setPosts] = useState([])
//     з jsonplaceholder отримати всі пости в компоненту Posts.js
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))

    }, [])


    return (
        //     відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
        <>
            {posts.map((post, id) => {
                return (
                    <>
                        <PostComponent key={id} post={post}/>
                    </>
                )
            })}
        </>
    );
};

export default PostsContainer;
