import React from "react";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.comment.postId,
            id: this.props.comment.id,
            name: this.props.comment.title,
            email: this.props.comment.email,
            body: this.props.comment.body
        }
    }

    render() {
        const {postId, id, name, email, body} = this.state
        return (
            <div>
                <hr/>
                <h1>postId: {postId}</h1>
                <h1>id: {id}</h1>
                <h1>name: {name}</h1>
                <h1>email: {email}</h1>
                <h1>body: {body}</h1>
            </div>
        )
    }
}

export default Comment