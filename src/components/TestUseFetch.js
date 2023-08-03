import React, {useEffect, useState} from 'react';
import {useFetch} from "../hooks/useFetch";

const TestUseFetch = () => {
    const [fetchArr, setFetchArr] = useState([])

    const users = useFetch('albums')
    useEffect(() => {
        setFetchArr(users)
    }, [users]);

    console.log(fetchArr)

    return (
        <div>
            {fetchArr.map((item) => {
                return (
                    <p key={item.id}>{JSON.stringify(item)}</p>
                )
            })}
        </div>
    );
};

export default TestUseFetch;