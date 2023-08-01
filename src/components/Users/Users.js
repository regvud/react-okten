import React from "react";
import axios from "axios";
import UserComp from "./User/UserComp";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => this.setState(data))
    }


    render() {
        return (
            <>
                {this.state.users?.map((user, id) => (<UserComp user={user} key={id}/>))}
            </>
        )
    }
}

export default Users;
