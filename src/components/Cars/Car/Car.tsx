import React, {FC, PropsWithChildren, useRef, useState} from 'react';
import {ICar} from "../../../interfaces";
import {carActions} from "../../../redux/slices/carsSlice";
import {useAppDispatch,} from "../../../hooks/reduxHooks";
import defaultCarImage from '../../../assets/merc.jpg'
import {carService} from "../../../services/carService";

interface IProps extends PropsWithChildren {
    car: ICar,
}

const Car: FC<IProps> = ({car}) => {
        const {brand, id, price, year, photo} = car;
        const dispatch = useAppDispatch();
        const inputRef = useRef<HTMLInputElement>(null);
        const [image, setImage] = useState(null)
        const deleteCar = (id: number) => {
            dispatch(carActions.remove({id}))
        }

        const addPhoto = async () => {
            const formData = new FormData();
            const file: Blob = inputRef.current.files[0]
            formData.append('photo', file)
            await carService.insertPhotoByID(id, formData)
            setImage(URL.createObjectURL(file))
        };

        return (
            <div>
                <hr/>
                <h3>{id}</h3>
                <h3>{brand}</h3>
                <h3>{year}</h3>
                <h3>{price}</h3>
                <img src={image || photo || defaultCarImage} alt={brand} style={{width: '450px', height: '500px'}}
                     onClick={() => inputRef.current.click()}
                />
                <input type="file" accept={'image/jpeg, image/png'} ref={inputRef}
                       onChange={addPhoto} style={{display: "none"}}/>
                <button onClick={() => deleteCar(id)}>delete</button>
                <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
            </div>
        );
    }
;

export default Car;