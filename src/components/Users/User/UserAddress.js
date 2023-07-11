import React from 'react';

const UserAddress = ({address}) => {
    const {street, suite, city} = address
    return (
        <>
            <h4>street: {street}</h4>
            <h4>suite: {suite}</h4>
            <h4>city: {city}</h4>
        </>
    );
};

export default UserAddress;