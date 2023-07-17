import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const CommentForm = ({handleSubmit}) => {
    const {register, reset} = useForm();



    return (
        <form onSubmit={handleSubmit}>

        </form>
    );
};

export default CommentForm;