import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";

const CarForm = ({setCars}) => {
    const {register, reset, handleSubmit} = useForm();

    const onSubmit = (car) => {
        carService.createCar(car).then(car => setCars(prev => [...prev, car]))
        console.log(car)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>brand<input type="text" {...register('brand')}/></label>
            <label>price<input type="text"{...register('price')}/></label>
            <label>year<input type="text"{...register('year')}/></label>
            <button>Save</button>
        </form>
    );
};

export default CarForm;