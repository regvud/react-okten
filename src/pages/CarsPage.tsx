import React, {FC} from 'react';
import Cars from "../components/Cars/Cars";
import CarForm from "../components/Cars/Car/CarForm";
import {useLocation, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carsSlice";


const CarsPage: FC = () => {
    const [, setParams] = useSearchParams();
    const {page} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const location = useLocation();
    console.log(page)
    // const pagination = (action: string) => {
    //     if (action === 'prev') {
    //         dispatch(carActions.decrementPage())
    //         setParams({page: page.toString()})
    //
    //     } else {
    //         dispatch(carActions.incrementPage())
    //         setParams({page: page.toString()})
    //     }
    //
    // }

    if (page !== null) {
        setParams({page: page.toString()})
    }

    return (
        <>
            <CarForm/>
            <div>
                <button onClick={() => dispatch(carActions.decrementPage())}>prev</button>
                <button onClick={() => dispatch(carActions.incrementPage())}>next</button>
            </div>
            <Cars page={page}/>
        </>
    );
};

export default CarsPage;