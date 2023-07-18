import React, {useState} from 'react';
import UserForm from "../UserForm/UserForm";
import Users from "../Users";

const UserContainer = () => {
    const [users, setUsers] = useState(null);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export default UserContainer;