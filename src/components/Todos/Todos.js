import React, {useEffect, useState} from 'react';
import axios from "axios";
import TodosComponent from "./TodosContainer/TodosComponent";

const Todos = () => {
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(({data}) => setTodos(data))
    }, [])

    console.log(todos)
    return (
        <div>
            {todos?.map((todo, id) => <TodosComponent todos={todo} key={id}/>)}
        </div>
    );
};

export default Todos;