import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";

const CarUpdate = (id, car) => {
    const {register, reset, handleSubmit} = useForm();

    const onSubmit = (car) => {
        carService.updateCar(id, car).then(car => console.log(id, car))
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

export default CarUpdate;