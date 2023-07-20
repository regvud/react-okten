import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();
    return (
        <form onSubmit={handleSubmit}>
            <label><input type="text" {...register({})}/></label>
            <label><input type="text"/></label>
            <label><input type="text"/></label>
            <label><input type="text"/></label>
        </form>
    );
};

export default CarForm;