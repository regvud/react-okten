import './App.css';
import React, {useState} from "react";
import UserComponent from "./components/Users/UserComponent";
import UserPosts from "./components/UserPosts/UserPosts";


// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.


function App() {
    const [users, setUsers] = useState([])
    const [userPosts, setUserPosts] = useState([])
    const [userId, setUserId] = useState(null)

    return (
        <>
            <UserComponent users={users} setUserId={setUserId} setUsers={setUsers}/>
            <UserPosts userId={userId} userPosts={userPosts} setUserPosts={setUserPosts}/>
        </>
    );
}

export default App;
