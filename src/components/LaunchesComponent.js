//     є API от SpaceX
//     https://api.spacexdata.com/v3/launches/
//         потрібно вивести всі запуски кораблів окрім 2020 року
//     репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import React from 'react';
import styles from './PostComponent.module.css'

let mission = '';
const LaunchesComponent = (props) => {
    const {launch} = props
    const {mission_name, launch_year, } = launch


    return (
        <>
            <div className={styles.container}>
                <h4>{mission_name}</h4>
                <h4>{launch_year}</h4>
                <h4>{links}</h4>
            </div>
        </>
    );
};

export default LaunchesComponent;