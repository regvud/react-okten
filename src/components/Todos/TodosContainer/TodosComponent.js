import React from 'react';

const TodosComponent = ({todos}) => {
    const {userId, id, title, completed} = todos
    return (
        <div>
            <h3>{userId}</h3>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h3>{completed}</h3>
        </div>
    );
};

export default TodosComponent;