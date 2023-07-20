import React from 'react';

const CarComponent = ({car, deleteCar}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <h3>ID: {id}</h3>
            <h3>brand: {brand}</h3>
            <h3>price: {price}</h3>
            <h3>year: {year}</h3>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    );
};

export default CarComponent;