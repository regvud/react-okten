import React from 'react';
// Створити  компоненту TestUseMemo в та викликати її в Апп
// TestUseMemo має пропсу data (довільне занчення та данні)
// Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл). та мемомізувати її за допомоги useMemo якщо data змінюється
//
// Зробити те саме, але з використанням useCallback
//
// Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
//     Сигнатура хука function useToggle(defaultValue)
//
// створити хук useFetch, котрий спроможний робити запит на jsonplaceholder на /users, /posts, /comments в залежності від аргументу.
//     Сигнатура хука function(endpoint)
//
// створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти
// В середині хука реалізувати методи add(item), remove(id)
const TestUseMemo = ({data}) => {
    const {data} = data
    let num = 1
    for (let i = 0; i < 100000; i++) {
        num = num + i
    }

    return (
        <div>
            <h1>Number: {num}</h1>
            <h2>{data}</h2>
        </div>
    );
};

export default TestUseMemo;