import React, {useState} from 'react';

const UserFormComponent = () => {
    const [formValues, setFormValues] = useState({
        id: '',
        name: '',
        username: ''
    })
    console.log(formValues)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${formValues.id}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        });

        return response.json()
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
                <input type="text" value={formValues.id} onChange={(e) => handleChange(e, 'id')}/>
                <label>
                </label>
                <label>
                    <input
                        type="text" value={formValues.name} onChange={(e) => handleChange(e, 'name')}/>
                </label>
                <label>
                    <input
                        type="text" value={formValues.username} onChange={(e) => handleChange(e, 'username')}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserFormComponent;