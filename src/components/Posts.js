//     з jsonplaceholder отримати всі пости в компоненту Posts.js
const Posts = (post) => {

}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>)
//     відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
//     Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)