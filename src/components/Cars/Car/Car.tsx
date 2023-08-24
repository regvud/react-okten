import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../../interfaces/carInterface";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {carActions} from "../../../redux/slices/carSlice";

interface IProps extends PropsWithChildren {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, year, price} = car;
    const dispatch = useAppDispatch();

    const remove = async (id: number) => {
        dispatch(carActions.remove(id))
    }

    return (
        <div style={{border: '1px solid brown', padding: '5px', margin:'5px'}}>
            <h3>{id}</h3>
            <h3>{brand}</h3>
            <h3>{price}</h3>
            <h3>{year}</h3>
            <button onClick={() => remove(id)}>delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
        </div>
    );
};

export default Car