import {useEffect} from "react";

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => console.log(users))
}, [])
