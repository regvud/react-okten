import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import CarComponent from "./CarComponent/CarComponent";

const Cars = ({cars}) => {

    return (
        <div>
            {cars.map((car, id) => {
                return <CarComponent car={car} key={id}/>
            })}
        </div>
    );
};

export default Cars;