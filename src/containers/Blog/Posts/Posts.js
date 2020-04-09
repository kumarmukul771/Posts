import React , { Component } from 'react';
import './Posts.css';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';

class Posts extends Component{

    state = {
        posts : [],
        selectedPost : null
    }

    componentDidMount(){
        axios.get("/posts")
            .then(response =>{
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,author : 'Mukul'
                    }
                })  
                // console.log(updatedPosts);
                this.setState({posts : updatedPosts});
            });
    }


    postSelectedHandler = (id)=>{
        this.setState({
            selectedPost : id
        });
        
        this.props.history.push('/'+id);
    }

    render(){
        const posts = this.state.posts.map(post => {
            return (
                // <Link key={post.id} to={'/'+post.id}>
                <Post 
                key={post.id}
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}/>
                // </Link>
            )
        });

        return(
            <section className="Posts">
                    {posts}
            </section>
        )
    }
}
export default Posts;