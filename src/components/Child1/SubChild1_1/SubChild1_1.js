import React, {useContext} from 'react';
import {ChildContext} from "../../../App";

const SubChild11 = () => {
    const {value, setValue} = useContext(ChildContext)

    return (
        <div>
            <h1>SubChild1_1 <i>{value}</i></h1>
        </div>
    );
};

export default SubChild11;