import React, {useEffect, useState} from 'react';
import LaunchesComponent from "./LaunchesComponent";


const LaunchesContainer = () => {
    // const [mission, setMission] = useState([])
    const [launches, setLaunches] = useState([])

//     є API от SpaceX
//     https://api.spacexdata.com/v3/launches/
    useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches/')
                .then(res => res.json())
                .then(launches => setLaunches(launches))
        }, []
    )

    return (
        <>
            {/*//         потрібно вивести всі запуски кораблів окрім 2020 року*/}
            {launches
                .filter(value => value.launch_year !== '2020')
                .map((launch, id) => {
                    return (
                        <>
                            {/* репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}
                            <LaunchesComponent key={launch.flight_number} launch={launch}/>
                        </>
                    )
                })}
        </>
    )
};

export default LaunchesContainer;


// for (const launch of launches) {
//     for (const launchKey in launch) {
//         if (launchKey === 'links') {
//             const mission = launch[launchKey].mission_patch_small
//
//         }
//     }
// }
// console.log(setMission)
