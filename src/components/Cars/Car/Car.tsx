import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../../interfaces/carInterface";
import {carService} from "../../../services/carService";

interface IProps extends PropsWithChildren {
    car: ICar,
    setCarForUpdate: React.Dispatch<React.SetStateAction<ICar>>,
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

const Car: FC<IProps> = ({car, setCarForUpdate, setTrigger}) => {
    const {brand, id} = car;

    const deleteCar = async (id: number) => {
        await carService.deleteByID(id)
        setTrigger(prevState => !prevState)
    }

    return (
        <div>
            <hr/>
            <h3>{id}</h3>
            <h3>{brand}</h3>
            <button onClick={() => deleteCar(id)}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
        </div>
    );
};

export default Car;