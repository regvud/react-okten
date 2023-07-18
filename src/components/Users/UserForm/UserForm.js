import React from 'react';
import {useForm} from "react-hook-form";


const UserForm = () => {
    const {register, handleSubmit} = useForm();
    const save = (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>id<input type="text" {...register('id')}/></label>
            <label>name<input type="text" {...register('name')}/></label>
            <label>username<input type="text" {...register('username')}/></label>
            <label>email<input type="text" {...register('email')}/></label>
            <button>save</button>
        </form>
    );
};

export default UserForm;