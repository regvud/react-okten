import React, {useEffect, useState} from 'react';
import UserPostComponent from "./UserPostComponent";

const UserPost = ({userId}) => {
    const [userPosts, setUserPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.json()).then(userPosts => setUserPost(userPosts))
    }, [userId])
    return (
        <div>
            {userPosts.map((userPost) => <UserPostComponent key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};

export default UserPost;