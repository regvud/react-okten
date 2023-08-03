import React, {memo, useMemo, useState} from 'react';


// TestUseMemo має пропсу data (довільне занчення та данні)
const TestUseMemo = ({data, setData}) => {
    const [count, setCount] = useState(0)

// Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл). та мемомізувати її за допомоги useMemo якщо data змінюється
    const heavyLoop = (num) => {
        for (let i = 0; i < 100000; i++) {
            num = num + i
        }
        return num
    }

    const numLoop = useMemo(() => {
        console.log('Data is changing..')
        return heavyLoop(count)
    }, [data]);

    const changeData = (e) => {
        setData(e.target.value)
    }

    const changeCount = (num) => {
        setCount(num + 1)
    }

    return (
        <div>
            <label><b>Data Change:</b> <input onInput={(e) => changeData(e)}></input>
            </label>
            {data ?
                <h3>Data: {data}</h3> :
                <h3>No Data</h3>
            }
            <h1>Counter updates after data change: {numLoop}</h1>
            <button onClick={() => changeCount(numLoop)}>Count change</button>
        </div>
    );
};

export default memo(TestUseMemo);