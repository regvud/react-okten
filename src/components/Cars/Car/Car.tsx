import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../../interfaces/carInterface";
import {carActions} from "../../../redux/slices/carsSlice";
import {useAppDispatch} from "../../../hooks/reduxHooks";

interface IProps extends PropsWithChildren {
    car: ICar,
}

const Car: FC<IProps> = ({car}) => {
    const {brand, id} = car;
    const dispatch = useAppDispatch();
    const deleteCar = (id: number) => {
        dispatch(carActions.remove({id}))
    }

    return (
        <div>
            <hr/>
            <h3>{id}</h3>
            <h3>{brand}</h3>
            <button onClick={() => deleteCar(id)}>delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
        </div>
    );
};

export default Car;