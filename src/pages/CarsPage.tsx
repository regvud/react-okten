import React, {FC, useState} from 'react';
import Cars from "../components/Cars/Cars";
import CarForm from "../components/Cars/Car/CarForm";


const CarsPage: FC = () => {
    const [page, setPage] = useState(1)
    const [trigger, setTrigger] = useState(false)
    console.log(page)

    const pagination = (action: string): void => {
        if (action === 'prev') {
            setPage(prevState => prevState--)
            setTrigger(prevState => !prevState)
        } else {
            setPage(prevState => prevState++)
            setTrigger(prevState => !prevState)
        }
    }
    return (
        <>
            <CarForm/>
            <div>
                <button onClick={() => pagination('prev')}>prev</button>
                <button onClick={() => pagination('next')}>next</button>
            </div>
            <Cars page={page} trigger={trigger}/>
        </>
    );
};

export default CarsPage;