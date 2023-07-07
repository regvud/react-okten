import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent";
import PostComponentDetailed from "./PostComponentDetailed";
import styles from "./PostComponent.module.css";

const PostsContainer = () => {
    const [posts, setPosts] = useState([])
//     з jsonplaceholder отримати всі пости в компоненту Posts.js
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))

    }, [])

    {/*//     Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/
    }
    const handlerClick = (id) => {
        const postToHandle = posts.find(post => post.id === id)
        console.log(postToHandle)
        return (
            <>
                <PostComponentDetailed key={id} post={postToHandle}/>
            </>
        )
    }

    return (
//     відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
        <>
            {posts.map((post, id) => {
                return (
                    <>
                        <PostComponent key={id} post={post} handlerClick={handlerClick}/>
                    </>
                )
            })}
        </>
    );
};

export default PostsContainer;
