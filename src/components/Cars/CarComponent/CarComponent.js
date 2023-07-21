import React from 'react';
import CarUpdate from "../CarUpdate/CarUpdate";
import {logDOM} from "@testing-library/react";

const CarComponent = ({car, deleteCar, updateCar, isActive}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <h3>ID: {id}</h3>
            <h3>brand: {brand}</h3>
            <h3>price: {price}</h3>
            <h3>year: {year}</h3>
            <button onClick={() => deleteCar(id)}>delete</button>
            <button onClick={() => updateCar(id, car)}>update</button>
            {
                isActive ?
                    <CarUpdate id={id} car={car}/> :
                    console.log('no updates')
            }
        </div>
    );
};

export default CarComponent;