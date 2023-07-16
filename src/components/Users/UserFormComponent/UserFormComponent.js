import React, {useState} from 'react';

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users

const UserFormComponent = ({formValues, setFormValues}) => {

    // console.log(formValues)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formValues)
        })
        // .then(res => res.json())
        // .then(res => console.log(res))

        const result = await response.json()
        console.log(result)
        return result
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

    // {
    //     "id": 1,
    //     "name": "Leanne Graham",
    //     "username": "Bret",
    //     "email": "Sincere@april.biz",
    //     "address": {
    //     "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //         "lat": "-37.3159",
    //             "lng": "81.1496"
    //     }
    // },
    //     "phone": "1-770-736-8031 x56442",
    //     "website": "hildegard.org",
    //     "company": {
    //     "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    // }
    // },


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/*<label>*/}
                {/*    <input type="text" value={formValues.id} onChange={(e) => handleChange(e, 'id')}/>*/}
                {/*</label>*/}
                <label>
                    <input
                        type="text" value={formValues.name} onChange={(e) => handleChange(e, 'name')}/>
                </label>
                <label>
                    <input
                        type="text" value={formValues.username} onChange={(e) => handleChange(e, 'username')}/>
                </label>
                <label>
                    <input
                        type="text" value={formValues.email} onChange={(e) => handleChange(e, 'email')}/>
                </label>
                <label>
                    <input
                        type="text" value={formValues.address} onChange={(e) => handleChange(e, 'address')}/>
                </label>
                <label>
                    <input
                        type="text" value={formValues.phone} onChange={(e) => handleChange(e, 'phone')}/>
                </label>
                <label>
                    <input
                        type="text" value={formValues.website} onChange={(e) => handleChange(e, 'website')}/>
                </label>
                <label>
                    <input
                        type="text" value={formValues.company} onChange={(e) => handleChange(e, 'company')}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserFormComponent;