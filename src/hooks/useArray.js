import {useEffect, useState} from 'react';

// створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
// В середині хука реалізувати методи add(item), remove(id)
export const useArray = (defaultValue, action) => {
    const [array, setArray] = useState([])

    useEffect(() => {
        setArray(defaultValue)
    }, []);


    if (action === 'add') {
        const add = (item) => {

        }
    }
};

