import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';

const CommentForm = () => {
    const [register, reset,] = useForm();

    const save = (user) => {
        // e.preventDefault()
        //
        // useEffect(() => {
        //     fetch('https://jsonplaceholder.typicode.com/comments', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'Application/json'
        //         },
        //         body: JSON.stringify(comments)
        //     })
        //         .then(value => value.json())
        //         .then(comments => console.log(comments))
        // })
        console.log(user)
    }
    return (
        <form>
            <label>postId: <input type="text" placeholder={'postId'} {...register('postId')}/></label>
            <label>id: <input type="text" placeholder={'id'} {...register('id')}/></label>
            <label>name: <input type="text" placeholder={'name'} {...register('name')}/></label>
            <label>email: <input type="text" placeholder={'email'} {...register('email')}/></label>
            <label>body: <input type="text" placeholder={'body'} {...register('body')}/></label>
            <button>save</button>
        </form>
    );
};

export default CommentForm;