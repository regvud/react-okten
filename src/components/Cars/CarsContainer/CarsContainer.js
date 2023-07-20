import React, {useState} from 'react';
import Cars from "../Cars";
import CarForm from "../CarForm/CarForm";

const CarsContainer = () => {

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export default CarsContainer;