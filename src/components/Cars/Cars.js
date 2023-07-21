import React, {useState} from 'react';
import {carService} from "../../services/carService";
import CarComponent from "./CarComponent/CarComponent";

const Cars = ({cars, setTrigger}) => {
    const [isActive, setIsActive] = useState(false);
    const deleteCar = async (id) => {
        try {
            await carService.deleteCar(id)

        } catch (e) {
            console.log(e.response.data)

        } finally {
            setTrigger(prev => !prev)
        }
    }

    const updateCar = (id, car) => {
        console.log(';dsadas')
        setIsActive(prevState => !prevState)
    }

    return (
        <div>
            {cars.map((car, id) => {
                return <CarComponent car={car} key={id} deleteCar={deleteCar} updateCar={updateCar}
                                     isActive={isActive}/>
            })}
        </div>
    );
};

export default Cars;