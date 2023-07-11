import React from 'react';
import SubChild1_1 from "./SubChild1_1/SubChild1_1";
import SubChild1_2 from "./SubChild1_2/SubChild1_2";
import styles from './Child.module.css'
const Child1 = ({subChild, setSubChild}) => {
    return (
        <div className={styles.block}>
            <SubChild1_1 subChild={subChild} setSubChild={setSubChild}/>
            <SubChild1_2 subChild={subChild} setSubChild={setSubChild}/>
        </div>
    );
};

export default Child1;