import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import Car from "./Car/Car";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slices/carsSlice";

interface IProps extends PropsWithChildren {
    page: number,
    trigger: boolean
}

const Cars: FC<IProps> = ({page, trigger}) => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars)

    useEffect(() => {
        dispatch(carActions.getAll({page}))
    }, [page, trigger, dispatch]);

    return (
        <div>
            {cars.map((car, id) => <Car key={id} car={car}/>)}
        </div>
    );
};

export default Cars;