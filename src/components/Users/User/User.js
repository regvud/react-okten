import React from 'react';
import UserDetails from "./UserComponents/UserDetails";
import UserAddress from "./UserComponents/UserAddress";
import Company from "./UserComponents/Company";
import styles from './UserComponents/Users.module.css'

const User = ({user}) => {
    const {id, email, name, username, address, company} = user
    return (
        <div className={styles.block}>
            <UserDetails id={id} email={email} name={name} username={username}/>
            <UserAddress address={address}/>
            <Company company={company}/>
        </div>
    );
};

export default User;
