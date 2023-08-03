import {useCallback, useState} from 'react';

// Зробити те саме, але з використанням useCallback
const TestUseCallback = ({data, setData}) => {
    const [count, setCount] = useState(0)

    const heavyLoop = (num) => {
        for (let i = 0; i < 100000; i++) {
            num = num + i
        }
        return num
    }

    const NumLoop = useCallback(() => {
        console.log('Data is changing..')
        return heavyLoop(count)
    }, [data]);

    const changeData = (e) => {
        setData(e.target.value)
    }

    const changeCount = (num) => {
        setCount(num + 1)
    }
    // console.log(numLoop)
    return (
        <div>
            <label><b>Data Change:</b> <input onInput={(e) => changeData(e)}></input>
            </label>
            {data ?
                <h3>Data: {data}</h3> :
                <h3>No Data</h3>
            }

            <h1>Counter updates after data change: <NumLoop/></h1>
            <br/>
            <button onClick={() => changeCount(NumLoop())}>Count change</button>
        </div>
    );
};

export default TestUseCallback;