import React, {useEffect} from 'react';
import ApiServices from "../../services/ApiServices";
import UserComponent from "./UserComponent/UserComponent";

const Users = ({users, setUsers}) => {
    ApiServices.getUsers()
    const apiUsers = JSON.parse(localStorage.getItem('users'))


    useEffect(() => {
        setUsers(apiUsers)
    }, [])
    console.log(users)
    return (
        <div>
            {users?.map((user, id) => {
                return (
                    <>
                        <UserComponent user={user} key={id}/>
                    </>
                )
            })}
        </div>
    );
};

export default Users;