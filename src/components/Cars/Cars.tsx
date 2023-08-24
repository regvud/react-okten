import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../redux/slices/carSlice";
import Car from "./Car/Car";


const Cars: FC = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);


    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'}}>
            {cars.map((car, id) => <Car car={car} key={id}/>)}
        </div>
    );
};

export default Cars
