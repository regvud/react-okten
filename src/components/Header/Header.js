import React from 'react';
import {useLocation} from "react-router-dom";

const Header = () => {
    const {state} = useLocation();
    console.log(state)
    return (
        <>
            {state === null ?
                <div>
                    <h1>Rick and Morty</h1>
                </div> :
                <div>
                    <h1>{state.name}</h1>
                </div>
            }

        </>
    );

};

export {Header};