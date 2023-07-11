import React, { useContext, useEffect} from 'react';
import {ChildContext} from "../../../App";

const SubChild22 = () => {
    const value_to_transfer = 'info and data';
    const {value, setValue} = useContext(ChildContext)

    useEffect(() => {
        setValue(value_to_transfer)
    }, [])

    return (
        <div>
            <h1>SubChild2_2 <i>{value}</i></h1>
        </div>
    );
};

export default SubChild22;