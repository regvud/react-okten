import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../../interfaces/carInterface";
import {carActions} from "../../../redux/slices/carsSlice";
import {useAppDispatch} from "../../../hooks/reduxHooks";

interface IProps extends PropsWithChildren {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {brand, id} = car;
    const dispatch = useAppDispatch();

    const removeCar = () => {
        dispatch(carActions.deleteByID({id}))
    }

    const updateCar = () => {
        dispatch(carActions.setCarForUpdate({car}))
    }

    return (
        <div>
            <hr/>
            <h3>{id}</h3>
            <h3>{brand}</h3>
            <button onClick={removeCar}> delete</button>
            <button onClick={updateCar}>update</button>
        </div>
    );
};

export default Car;