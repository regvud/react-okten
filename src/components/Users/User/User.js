import React from 'react';
import styles from './Users.module.css'

const User = ({user, setUserId}) => {
    const {id, email, name} = user
    return (
        <div className={styles.block}>
            <h4 className={styles.sub}>ID: {id}</h4>
            <h4 className={styles.sub}>Name: {name}</h4>
            <h4 className={styles.sub}>Email: {email}</h4>
            <button onClick={() => setUserId(id)} className={styles.button}>Show Posts</button>
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