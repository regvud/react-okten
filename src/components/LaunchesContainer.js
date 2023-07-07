import React, {useEffect, useState} from 'react';
import LaunchesComponent from "./LaunchesComponent";

const LaunchesContainer = () => {
    const [mission, setMission] = useState([])
    const [launches, setLaunches] = useState([])
    useEffect(() => {
            fetch('https://api.spacexdata.com/v3/launches/')
                .then(res => res.json())
                .then(launches => setLaunches(launches))
        }, []
    )
    // for (const launch of launches) {
    //     for (const launchKey in launch) {
    //         if (launchKey === 'links') {
    //             const mission = launch[launchKey].mission_patch_small
    //
    //         }
    //     }
    // }
    // console.log(setMission)

    return (
        <>
            {launches
                .filter(value => value.launch_year !== '2020')
                .map((launch, id) => {
                    return (
                        <>
                            <LaunchesComponent key={id} launch={launch}/>
                        </>
                    )
                })}
        </>
    )
};

export default LaunchesContainer;