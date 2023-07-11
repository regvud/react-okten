import React, {useEffect} from 'react';
import UserPostComponent from "./UserPostComponent";

const UserPosts = ({userId, userPosts, setUserPosts}) => {

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(res => res.json()).then(posts => setUserPosts(posts))
    }, [userId])
    return (
        <>
            {userPosts.map((post, id) => {
                return <UserPostComponent key={id} post={post}/>
            })}
        </>
    );
};

export default UserPosts;