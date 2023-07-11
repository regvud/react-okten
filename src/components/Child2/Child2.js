import React from 'react';
import SubChild2_2 from "./SubChild2_2/SubChild2_2";
import SubChild2_1 from "./SubChild2_1/SubChild2_1";
import styles from '../Child1/Child.module.css'


const Child2 = ({subChild, setSubChild}) => {
    return (
        <div className={styles.block}>
            <SubChild2_1 subChild={subChild} setSubChild={setSubChild}/>
            <SubChild2_2 subChild={subChild} setSubChild={setSubChild}/>
        </div>
    );
};

export default Child2;