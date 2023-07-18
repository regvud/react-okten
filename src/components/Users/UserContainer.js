import React, {useState} from 'react';
import UserForm from "./UserForm/UserForm";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    console.log(users)
    return (
        <div>
            <UserForm setUsers={setUsers}/>
        </div>
    );
};

export default UserContainer;