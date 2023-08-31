import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import Car from "./Car/Car";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slices/carsSlice";
import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
    page: number,
}

const Cars: FC<IProps> = ({page}) => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars)

    useEffect(() => {
        dispatch(carActions.getAll({page}))
    }, [page]);

    return (
        <div>
            {cars.map((car, id) => <Car key={id} car={car}/>)}
        </div>
    );
};

export default Cars;