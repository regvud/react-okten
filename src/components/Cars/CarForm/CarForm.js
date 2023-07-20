import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const save = (car) => {
        console.log(car)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>id<input type="text" {...register('id')}/></label>
            <label>brand<input type="text" {...register('brand')}/></label>
            <label>price<input type="text"{...register('price')}/></label>
            <label>year<input type="text"{...register('year')}/></label>
            <button onClick={save}>Save</button>
        </form>
    );
};

export default CarForm;