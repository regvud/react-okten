import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../../interfaces/carInterface";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {carActions} from "../../../redux/slices/carsSlice";


const CarForm: FC = () => {
    const {reset, register, setValue, handleSubmit} = useForm<ICar>();
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    if (carForUpdate) {
        setValue("price", carForUpdate.price)
        setValue("brand", carForUpdate.brand)
        setValue("year", carForUpdate.year)
    }

    const create: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create(car))
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.update({car, id: carForUpdate.id}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <input type="text" placeholder={'price'} {...register('price')} />
            <input type="text" placeholder={'brand'} {...register('brand')} />
            <input type="text" placeholder={'year'} {...register('year')} />
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default CarForm;