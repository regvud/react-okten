import React, {useEffect, useState} from 'react';
import Cars from "../Cars";
import CarForm from "../CarForm/CarForm";
import {carService} from "../../../services/carService";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    console.log(cars)

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data))
    }, [])
    return (
        <div>
            <CarForm setCars={setCars}/>
            <Cars cars={cars}/>
        </div>
    );
};

export default CarsContainer;