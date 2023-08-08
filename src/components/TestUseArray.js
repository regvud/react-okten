import React, {useState} from 'react';
import {useArray} from "../hooks/useArray";

const TestUseArray = () => {
    const [state, setState] = useState([1, 2, 3]);
    const [trigger, setTrigger] = useState(false)
    const [data, setData] = useState(null)

    const {array, add, remove} = useArray(state)

    const formOnSubmit = (e) => {
        e.preventDefault()
        add(data)
    }

    return (
        <div>
            <button onClick={() => {
                setTrigger(prevState => !prevState)
            }}>
                add
            </button>
            {trigger ?
                <>
                    <form onSubmit={formOnSubmit}>
                        <input type="text" placeholder={'add item'}
                               onInput={e => setData(e.target.value)}/>
                        <button>submit</button>
                    </form>
                </> :
                false
            }
            {array.map((value, id) => {
                    return (
                        <div key={id}>
                            <p>{value}</p>
                            <button onClick={() => remove(id)}>remove</button>
                        </div>
                    )
                }
            )}
        </div>
    );
};

export default TestUseArray;