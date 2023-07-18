import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";


const UserForm = ({setUsers}) => {
    const {register, handleSubmit} = useForm();
    const save = (data) => {
        setUsers(prev => [...prev, data.data])
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