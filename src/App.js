import './App.css';
import PostsContainer from "./components/Posts/PostsContainer";
import LaunchesContainer from "./components/Launches/LaunchesContainer";
import Users from "./components/Users/Users";
import {useState} from "react";
import UserPost from "./components/Users/UserPosts/UserPost";


function App() {
    const [userId, setUserId] = useState(null);
    return (
        <>
            {/*<PostsContainer/>*/}
            {/*<LaunchesContainer/>*/}
            <Users setUserId={setUserId}/>
            {userId && <UserPost userId={userId}/>}
        </>
    );
}

export default App;
