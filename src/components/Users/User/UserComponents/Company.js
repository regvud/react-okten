import React from 'react';

const Company = ({company}) => {
    const {name, catchPhrase, bs} = company
    return (
        <div>
            <h4>Company Name: {name}</h4>
            <h4>Company CatchPhrase: {catchPhrase}</h4>
            <h4>BS: {bs}</h4>
        </div>
    );
};

export default Company;