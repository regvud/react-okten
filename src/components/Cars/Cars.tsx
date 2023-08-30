import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {ICar} from "../../interfaces/carInterface";
import Car from "./Car/Car";

interface IProps extends PropsWithChildren {
    cars: ICar[]
}

const Cars: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map((car, id) => <Car key={id} car={car}/>)}
        </div>
    );
};

export default Cars;