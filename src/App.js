import './App.css';
import React, {createContext, useState} from "react";
import Child2 from "./components/Child2/Child2";
import Child1 from "./components/Child1/Child1";

// Тепер завдання:
//     З SubChild2_2 передати данні (будь-які) в SubChild1_1
// ***
// Я б для себе рекомендував зробити наступну штуку з завданням з subchild:
//     Зробити його спочатку без використання контексту, а потім переробити з ним. Так краще дійде суть

export const ChildContext = createContext(null)

function App() {
    const [value, setValue] = useState(null)

    return (
        <>
            <ChildContext.Provider value={{value, setValue}}>
                <Child1/>
                <Child2/>
            </ChildContext.Provider>
        </>
    );
}

export default App;
