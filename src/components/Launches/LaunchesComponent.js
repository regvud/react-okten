//     є API от SpaceX
//     https://api.spacexdata.com/v3/launches/
//         потрібно вивести всі запуски кораблів окрім 2020 року
//     репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import React from 'react';
import styles from '../Posts/PostComponent.module.css'

const LaunchesComponent = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch

    return (
        <>
            <div className={styles.container}>
                <h4>mission name: {mission_name}</h4>
                <h4>launch year: {launch_year}</h4>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </>
    );
};

export default LaunchesComponent;