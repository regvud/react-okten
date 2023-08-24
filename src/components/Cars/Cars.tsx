import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {ICar} from "../../interfaces/carInterface";
import Car from "./Car/Car";

interface IProps extends PropsWithChildren {
    cars: ICar[]
    setCarForUpdate:  React.Dispatch<React.SetStateAction<ICar>>
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

const Cars: FC<IProps> = ({cars, setCarForUpdate, setTrigger}) => {
    return (
        <div>
            {cars.map((car, id) => <Car key={id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export default Cars;