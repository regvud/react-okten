import React, {FC, PropsWithChildren} from 'react';
import Car from "./Car/Car";
import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps extends PropsWithChildren {
}

const Cars: FC<IProps> = () => {
    const {cars} = useAppSelector(state => state.cars);

    return (
        <div>
            {cars.map((car, id) => <Car key={id} car={car}/>)}
        </div>
    );
};

export default Cars;