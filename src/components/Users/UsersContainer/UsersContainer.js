import React, {useEffect, useState} from 'react';
import UserFormComponent from "../UserFormComponent/UserFormComponent";
import Users from "../Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([])
    const [newUsers, setNewUsers] = useState([])
    const [apiUsers, setApiUsers] = useState(null)
    const [incrementId, setIncrementId] = useState(null)
    const [formValues, setFormValues] = useState({
        id: incrementId,
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
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(user => {
                if (formValues.name === '' || formValues.email === '') {
                    throw e
                } else {
                    console.log(incrementId)
                    setNewUsers(prevState => [...prevState, user])
                }
            })
            .catch(e => console.error(`${e} Incorrect input: Every line is required.`))
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
    console.log(incrementId)
    return (
        <>
            <UserFormComponent handleChange={handleChange} formValues={formValues} handleSubmit={handleSubmit}/>
            <Users
                users={users}
                setUsers={setUsers}
                newUsers={newUsers}
                formValues={formValues}
                setIncrementId={setIncrementId}
                incrementId={incrementId}
                setApiUsers={setApiUsers}
                setNewUsers={setNewUsers}/>
        </>
    );
}
export default UsersContainer;