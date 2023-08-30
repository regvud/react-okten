import React, {FC, useEffect} from 'react';
import Cars from "../components/Cars/Cars";
import CarForm from "../components/Cars/Car/CarForm";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carsSlice";


const CarsPage: FC = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars)

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <>
            <CarForm/>
            <Cars cars={cars}/>
        </>
    );
};

export default CarsPage;