import React from "react";
import axios from "axios";
import Comment from "./Comment/Comment";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(({data}) => this.setState({comments: data}))
    }

    render() {
        const {comments} = this.state
        return (
            <>
                {comments?.map((comment, id) => <Comment comment={comment} key={id}/>)}
            </>
        )
    }
}

export default Comments;
