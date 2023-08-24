import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import Cars from "../components/Cars/Cars";
import {ICar} from "../interfaces/carInterface";
import {carService} from "../services/carService";
import CarForm from "../components/Cars/Car/CarForm";

interface IProps extends PropsWithChildren {
}

const CarsPage: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)
    const [trigger, setTrigger] = useState<boolean>(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </>
    );
};

export default CarsPage;