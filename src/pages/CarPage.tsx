import React, {FC} from 'react';
import Cars from "../components/Cars/Cars";
import CarForm from "../components/Cars/Car/CarForm";

const CarPage: FC = () => {
    return (
        <>
            <CarForm/>
            <Cars/>
        </>
    );
};

export default CarPage;
