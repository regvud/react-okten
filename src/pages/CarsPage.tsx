import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import Cars from "../components/Cars/Cars";
import CarForm from "../components/Cars/Car/CarForm";
import {carActions} from "../redux/slices/carsSlice";
import {useAppDispatch} from "../hooks/reduxHooks";

interface IProps extends PropsWithChildren {
}

const CarsPage: FC<IProps> = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);

    return (
        <>
            <CarForm/>
            <Cars/>
        </>
    );
};

export default CarsPage;