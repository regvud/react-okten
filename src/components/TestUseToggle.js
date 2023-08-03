import React, {useState} from 'react';
import {useToggle} from "../hooks/useToggle";

// Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
//     Сигнатура хука function useToggle(defaultValue)
const TestUseToggle = () => {
    const [status, setStatus] = useState(false)

    const statusSwitcher = useToggle(status)
    console.log(statusSwitcher)
    return (
        <div>
            <h1>Status: {status ? 'true' : 'false'}</h1>
            <button onClick={() => setStatus(statusSwitcher)}>Switcher</button>
        </div>
    );
};

export default TestUseToggle;