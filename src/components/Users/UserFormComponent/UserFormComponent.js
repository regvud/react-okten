import React from 'react';

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users

const UserFormComponent = ({formValues, handleChange, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <label>
                    <input
                        type="text" placeholder={'name'} value={formValues.name} onChange={(e) => handleChange(e, 'name')}/>
                </label>
                <label>
                    <input
                        type="text" placeholder={'username'} value={formValues.username} onChange={(e) => handleChange(e, 'username')}/>
                </label>
                <label>
                    <input
                        type="text" placeholder={'email'} value={formValues.email} onChange={(e) => handleChange(e, 'email')}/>
                </label>
                <label>
                    <input
                        type="text" placeholder={'address'} value={formValues.address} onChange={(e) => handleChange(e, 'address')}/>
                </label>
                <label>
                    <input
                        type="text" placeholder={'phone'} value={formValues.phone} onChange={(e) => handleChange(e, 'phone')}/>
                </label>
                <label>
                    <input
                        type="text" placeholder={'website'} value={formValues.website} onChange={(e) => handleChange(e, 'website')}/>
                </label>
                <label>
                    <input
                        type="text" placeholder={'company'} value={formValues.company} onChange={(e) => handleChange(e, 'company')}/>
                </label>
                <label>
                    <button type="submit">Submit</button>
                </label>
            </form>
        </div>
    );
};

export default UserFormComponent;