import React, {FC, useEffect} from 'react';
import Cars from "../components/Cars/Cars";
import CarForm from "../components/Cars/Car/CarForm";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carsSlice";


const CarsPage: FC = () => {
    const [, setParams] = useSearchParams({page: '1'});
    const {page, next, prev} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const pagination = (action: string) => {
        if (action === 'prev') {
            dispatch(carActions.decrementPage())

        } else {
            dispatch(carActions.incrementPage())
        }

    }

    useEffect(() => {
        setParams({page: page.toString()})
    }, [page]);

    return (
        <>
            <CarForm/>
            <div>
                <button disabled={!prev} onClick={() => pagination('prev')}>prev</button>
                <button disabled={!next} onClick={() => pagination('next')}>next</button>
            </div>
            <Cars page={page}/>
        </>
    );
};

export default CarsPage;