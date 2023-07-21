import React, {useEffect, useState} from 'react';
import Cars from "../Cars";
import CarForm from "../CarForm/CarForm";
import {carService} from "../../../services/carService";

const CarsContainer = () => {
    const [trigger, setTrigger] = useState(null);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    return (
        <div>
            <CarForm setCars={setCars} setTrigger={setTrigger}/>
            <Cars cars={cars} setTrigger={setTrigger}/>
        </div>
    );
};

export default CarsContainer;