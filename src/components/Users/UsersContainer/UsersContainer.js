import React, {useEffect, useState} from 'react';
import UserFormComponent from "../UserFormComponent/UserFormComponent";
import Users from "../Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([])
    const [userOnSave, setUserOnSave] = useState(false)
    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        website: '',
        company: ''
    })

    //forms functions
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(user => {
                setUserOnSave(prevState => !prevState)
                console.log(userOnSave)
            })

        // const result = await response.json()
        // console.log(result)
        // return result
    }

    const handleChange = (e, key) => {
        e.preventDefault()
        setFormValues(prevState => {
            return {
                ...prevState,
                [key]: e.target.value
            }
        })
    }


    return (
        <>
            <UserFormComponent handleChange={handleChange} formValues={formValues} handleSubmit={handleSubmit}/>
            <Users users={users} setUsers={setUsers} userOnSave={userOnSave}/>
        </>
    );
}
export default UsersContainer;