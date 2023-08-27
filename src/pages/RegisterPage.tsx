import React from 'react';
import {useForm} from "react-hook-form";

const RegisterPage = () => {
    const {register, reset, handleSubmit} = useForm();

    return (
        <form>
            <input type="text" placeholder={'login'}/>
            <input type="text" placeholder={'register'}/>
        </form>
    );
};

export default RegisterPage;