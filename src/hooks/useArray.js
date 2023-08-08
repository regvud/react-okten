import {useState} from 'react';

// створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
// В середині хука реалізувати методи add(item), remove(id)
export const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue)

    const add = (item) => {
        setArray(prevState => [...prevState, item])
    }

    const remove = (id) => {
        setArray(prev => {
            prev.splice(id, 1)
            return [...prev]
        })
    }

    return {array, add, remove}
};

