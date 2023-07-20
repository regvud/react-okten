import React, {useEffect, useState} from 'react';
import UserForm from "../UserForm/UserForm";
import Users from "../Users";
import userServices from "../../../services/userServices";

const UserContainer = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userServices.getAll().then(value => setUsers(value.data))
    }, [])

    console.log(users)
    return (
        <div>
            <UserForm setUsers={setUsers} users={users}/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export default UserContainer;