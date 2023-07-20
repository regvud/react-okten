import React from 'react';

const CarComponent = ({car}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <h3>ID: {id}</h3>
            <h3>brand: {brand}</h3>
            <h3>price: {price}</h3>
            <h3>year: {year}</h3>
        </div>
    );
};

export default CarComponent;