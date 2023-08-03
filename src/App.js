import './App.css';
import TestUseMemo from "./components/TestUseMemo";
import {useState} from "react";
import TestUseCallback from "./components/TestUseCallback";
import TestUseToggle from "./components/TestUseToggle";
import TestUseFetch from "./components/TestUseFetch";


function App() {
    const [data, setData] = useState('')
    return (
        <>
            {/*// Створити  компоненту TestUseMemo в та викликати її в Апп*/}

            {/*<TestUseMemo data={data} setData={setData}/>*/}
            {/*<TestUseCallback data={data} setData={setData}/>*/}
            <TestUseToggle/>
            {/*<TestUseFetch/>*/}
        </>
    );
}

export default App;
