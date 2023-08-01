import React from "react";

class PostComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.post.userId,
            id: this.props.post.id,
            title: this.props.post.title,
            body: this.props.post.body
        }
    }

    render() {
        const {userId, id, title, body} = this.state
        return (
            <div>
                <hr/>
                <h1>userId: {userId}</h1>
                <h1>id: {id}</h1>
                <h1>title: {title}</h1>
                <h1>body: {body}</h1>
            </div>
        )
    }
}

export default PostComp