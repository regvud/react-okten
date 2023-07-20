import React from 'react';
import UserComponent from "./UserComponent/UserComponent";

const Users = ({users}) => {

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