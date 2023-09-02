import React, {FC, PropsWithChildren, useState} from 'react';
import {ICar} from "../../../interfaces/carInterface";
import {carActions} from "../../../redux/slices/carsSlice";
import {useAppDispatch,} from "../../../hooks/reduxHooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICarPhoto} from "../../../interfaces/carPhoto";

interface IProps extends PropsWithChildren {
    car: ICar,
}

const Car: FC<IProps> = ({car}) => {
        const {brand, id, price, year, photo} = car;
        const [onButtonClick, setOnButtonClick] = useState(false)
        const dispatch = useAppDispatch();
        const {reset, handleSubmit, setValue, register} = useForm<ICarPhoto>();
        const deleteCar = (id: number) => {
            dispatch(carActions.remove({id}))
        }

        const addPhoto: SubmitHandler<ICarPhoto> = async (photo) => {
            setValue('photo', car.photo)
            await dispatch(carActions.insertPhoto({id, photo}))
            reset()
        }

        return (
            <div>
                <hr/>
                <h3>{id}</h3>
                <h3>{brand}</h3>
                <h3>{year}</h3>
                <h3>{price}</h3>
                {photo && <img alt={'carPhoto'} src={photo}/>}
                <button onClick={() => deleteCar(id)}>delete</button>
                <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
                <button onClick={() => setOnButtonClick(prev => !prev)}>add photo</button>
                {onButtonClick &&
                    <form onSubmit={handleSubmit(addPhoto)}>
                        <input type={'text'} placeholder={'photo url'} {...register('photo')}/>
                        <button>add</button>
                    </form>
                }
            </div>
        );
    }
;

export default Car;