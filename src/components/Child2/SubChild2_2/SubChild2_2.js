import React, {useContext} from 'react';
import subChild1_1 from "../../Child1/SubChild1_1/SubChild1_1";

const SubChild22 = () => {
    const value_to_transfer = 'info and data';
    useContext(value_to_transfer)
    return (
        <div>
            <h1>SubChild2_2</h1>
        </div>
    );
};

export default SubChild22;