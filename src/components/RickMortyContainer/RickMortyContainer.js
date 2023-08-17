import React, {useState} from 'react';
import Episodes from "./Episodes/Episodes";
import {useSelector} from "react-redux";

const RickMortyContainer = () => {
    const [page, setPage] = useState(1);
    const {nextPage, prevPage} = useSelector(state => state.episodes);

    return (
        <>
            <div>
                <button disabled={prevPage == null} onClick={() => setPage(prevState => --prevState)}>prev</button>
                <button disabled={nextPage == null} onClick={() => setPage(prevState => ++prevState)}>next</button>
            </div>
            <Episodes page={page}/>
        </>
    );
};

export default RickMortyContainer;