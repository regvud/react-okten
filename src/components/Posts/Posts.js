import React from "react";
import axios from "axios";
import PostComp from "./Post/PostComp";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => this.setState({posts: data}))
    }

    render() {
        const {posts} = this.state
        return (
            <>
                {posts?.map((post, id) => <PostComp post={post} key={id}/>)}
            </>
        )
    }
}

export default Posts;
