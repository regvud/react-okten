import React from 'react';

const SubChild22 = ({subChild, setSubChild}) => {
    const value_to_transfer = 'info and data';
    setSubChild(value_to_transfer)

    return (
        <div>
            <h1>SubChild2_2 {subChild}</h1>
        </div>
    );
};

export default SubChild22;