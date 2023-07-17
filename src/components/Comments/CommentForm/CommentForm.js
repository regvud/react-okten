import React from 'react';
import {useForm} from "react-hook-form";

const CommentForm = ({setComments}) => {
    const {register, reset, handleSubmit} = useForm();

    const save = (user) => {
        setComments(prev => [...prev, user])
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