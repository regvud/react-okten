import './App.css';
import PostsContainer from "./components/PostsContainer";


//
//
//
// =====
//     є API от SpaceX
//     https://api.spacexdata.com/v3/launches/
//         потрібно вивести всі запуски кораблів окрім 2020 року
//     репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
//
//
//     #Advance
//
//     вивести всіх юзерів з плайсхолдеру
//     в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
//     пости мають виводитись під компонетою Users (в App компоненті)
function App() {

    return (
        <>
            <PostsContainer/>
        </>
    );
}

export default App;
