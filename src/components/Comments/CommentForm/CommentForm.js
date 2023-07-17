import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const CommentForm = () => {
    const {register, reset, handleSubmit} = useForm();


    // <h4>{postId}</h4>
    // <h4>{id}</h4>
    // <h4>{name}</h4>
    // <h4>{email}</h4>
    // <h4>{body}</h4>

    const save = (user) => {
        console.log(user)
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>postId <input type="text" placeholder={'postId'} {...register('postId')}/></label>
            <label>id <input type="text" placeholder={'id'} {...register('id')}/></label>
            <label>name <input type="text" placeholder={'name'} {...register('name')}/></label>
            <label>email <input type="text" placeholder={'email'} {...register('email')}/></label>
            <label>body <input type="text" placeholder={'body'} {...register('body')}/></label>
            <button>save</button>
        </form>
    );
};

export default CommentForm;