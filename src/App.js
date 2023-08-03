import './App.css';
import TestUseMemo from "./components/TestUseMemo";
import {useState} from "react";


function App() {
    const [data, setData] = useState([1, 2, 3])
    return (
        <>
            <TestUseMemo data={data}/>
        </>
    );
}

export default App;
