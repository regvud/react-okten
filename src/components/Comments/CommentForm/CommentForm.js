import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const CommentForm = ({handleSubmit}) => {
    const {register, reset} = useForm();

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

    return (
        <form onSubmit={handleSubmit}>

        </form>
    );
};

export default CommentForm;