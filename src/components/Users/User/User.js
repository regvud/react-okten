import React from 'react';
import UserDetails from "./UserDetails";
import UserAddress from "./UserAddress";
import Company from "./Company";
import company from "./Company";

const User = ({user, setUserId}) => {
    const {id, email, name, username, address, company} = user
    return (
        <div>
            <UserDetails id={id} email={email} name={name} username={username}/>
            <UserAddress address={address}/>
            <Company company={company}/>
            <button onClick={() => setUserId(id)}>Show Posts</button>
        </div>
    );
};

export default User;

// import React from 'react';
// import UserDetails from "./UserDetails";
// import UserAddress from "./UserAddress";
//
// const User = ({user}) => {
//     return (
//         <div>
//             <UserDetails id={user.id} email={user.email} name={user.name} username={user.username}/>
//             <UserAddress address={user.address}/>
//         </div>
//     );
// };
//
// export default User;