import React, {FC, PropsWithChildren} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../../interfaces/carInterface";
import {carService} from "../../../services/carService";


interface IProps extends PropsWithChildren {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    carForUpdate: ICar,
    setCarForUpdate: React.Dispatch<React.SetStateAction<ICar>>
}

const CarForm: FC<IProps> = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, setValue, handleSubmit} = useForm<ICar>();

    if (carForUpdate) {
        setValue("price", carForUpdate.price)
        setValue("brand", carForUpdate.brand)
        setValue("year", carForUpdate.year)
    }

    const create: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        setTrigger(prevState => !prevState)
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateByID(car, carForUpdate.id)
        setCarForUpdate(null)
        setTrigger(prevState => !prevState)
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