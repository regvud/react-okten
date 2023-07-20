import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import CarComponent from "./CarComponent/CarComponent";

const Cars = ({cars, setTrigger}) => {
    const deleteCar = (id) => {
        carService.deleteCar(id)
        setTrigger(prev => !prev)
    }
    return (
        <div>
            {cars.map((car, id) => {
                return <CarComponent car={car} key={id} deleteCar={deleteCar}/>
            })}
        </div>
    );
};

export default Cars;