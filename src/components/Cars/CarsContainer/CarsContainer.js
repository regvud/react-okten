import React, {useEffect, useState} from 'react';
import Cars from "../Cars";
import CarForm from "../CarForm/CarForm";
import {carService} from "../../../services/carService";

const CarsContainer = () => {
    const [trigger, setTrigger] = useState(false);
    const [cars, setCars] = useState([]);
    console.log(trigger)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])
    return (
        <div>
            <CarForm setCars={setCars}/>
            <Cars cars={cars} setTrigger={setTrigger}/>
        </div>
    );
};

export default CarsContainer;