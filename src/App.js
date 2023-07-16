import './App.css';
import UserFormComponent from "./components/Users/UserFormComponent/UserFormComponent";
import Users from './components/Users/Users'
import {useState} from "react";


function App() {

    const [formValues, setFormValues] = useState({
        // id: '',
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        website: '',
        company: ''
    })

    return (
        <>
            <UserFormComponent formValues={formValues} setFormValues={setFormValues}/>
            <Users formValues={formValues}/>
        </>
    );
}

export default App;
