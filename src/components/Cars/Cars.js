import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import CarComponent from "./CarComponent/CarComponent";

const Cars = () => {
    const [cars, setCars] = useState([]);
    console.log(cars)

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data))
    }, [])
    return (
        <div>
            {cars.map((car, id) => {
                return <CarComponent car={car} key={id}/>
            })}
        </div>
    );
};

export default Cars;