import React from 'react';
import SubChild2_2 from "./SubChild2_2/SubChild2_2";
import SubChild2_1 from "./SubChild2_1/SubChild2_1";
import styles from '../Child1/Child.module.css'


const Child2 = () => {
    return (
        <div className={styles.block}>
            <SubChild2_1/>
            <SubChild2_2/>
        </div>
    );
};

export default Child2;