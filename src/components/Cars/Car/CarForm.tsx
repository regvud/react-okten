import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {carActions} from "../../../redux/slices/carSlice";
import {ICar} from "../../../interfaces/carInterface";

const CarForm: FC = () => {
    const {setValue, reset, handleSubmit, register} = useForm<ICar>();
    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.cars);

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
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
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default CarForm;