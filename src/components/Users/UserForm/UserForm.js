import React from 'react';
import {useForm} from "react-hook-form";
import ApiServices from "../../../services/ApiServices";


const UserForm = ({setUsers}) => {
    const {register, handleSubmit} = useForm();

    const save = (user) => {
        ApiServices.postUser(user)
        const postUser = JSON.parse(localStorage.getItem('postUser'))
        console.log(postUser)
        setUsers(prev => [...prev, postUser])
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>name<input type="text" {...register('name')} onChange={}/></label>
            <label>username<input type="text" {...register('username')}/></label>
            <label>email<input type="text" {...register('email')}/></label>
            <label>address.street<input type="text" {...register('address.street')}/></label>
            <label>address.suit<input type="text" {...register('address.suit')}/></label>
            <label>address.city<input type="text" {...register('address.city')}/></label>
            <label>address.zipcode<input type="text" {...register('zipcode')}/></label>
            <label>address.geo.lat<input type="text" {...register('address.geo.lat')}/></label>
            <label>address.geo.lng<input type="text" {...register('address.geo.lng')}/></label>
            <label>phone<input type="text" {...register('phone')}/></label>
            <label>website<input type="text" {...register('website')}/></label>
            <label>company.name<input type="text" {...register('company.name')}/></label>
            <label>company.name<input type="text" {...register('company.name')}/></label>
            <label>company.name<input type="text" {...register('company.name')}/></label>
            <label>company.catchphrase<input type="text" {...register('company.catchphrase')}/></label>
            <label>company.bs<input type="text" {...register('company.bs')}/></label>
            <button>save</button>
        </form>
    );
};

export default UserForm;