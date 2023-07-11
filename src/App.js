import './App.css';
import React, { useEffect, useState} from "react";
import Users from "./components/Users/Users";

// property drill

// Структура:
//     Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
//     В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру
// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
// UserAddress - яка відображає інформацію street suite city,
// Company - яка відображає name,catchPhrase,bs


function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => setUsers(users))
    }, [])

    return (
        <>
            <Users users={users}/>
            {/*<UserPosts userId={userId} userPosts={userPosts} setUserPosts={setUserPosts}/>*/}
        </>
    );
}

export default App;
