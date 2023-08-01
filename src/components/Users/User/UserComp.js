import React from "react";

class UserComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>{this.props.user}</h1>
                {/*<h1>{this.props.user.name}</h1>*/}
            </>
        )
    }
}

export default UserComp