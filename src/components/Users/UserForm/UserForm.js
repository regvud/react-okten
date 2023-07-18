import React from 'react';
import {useForm} from "react-hook-form";


const UserForm = () => {
    const {register, handleSubmit} = useForm();
    return (
        <form onSubmit={handleSubmit}>
            <label><input type="text" {...register('')}/></label>
        </form>
    );
};

export default UserForm;