import React, { Component } from 'react';
import axios from '../../../axios';
import './FullPost.css';
import { Route } from 'react-router-dom';

class FullPost extends Component {

    state = {
        post : null
    }
    componentDidMount(){
        console.log("Update");
        if(this.props.match.params.id){
            axios.get('/posts/' + this.props.match.params.id)
                .then(response =>{
                        this.setState({post : response.data});
                        console.log(response.data);
                })
        }
    }

    deleteHandler = ()=>{
        axios.delete('/posts/' + this.props.match.params.id)
                .then(response =>{
                        console.log(response.data);
                })
    }
    
    render () {
        console.log(this.props);
        let post = <p style={{textAlign : 'center'}}>Loading..</p>;

        if(this.props.match.params.id && this.state.post!== null ){
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteHandler} >Delete</button>
                    </div>
                    <Route path={this.props.match.url + "/mukul"} render={()=> <h1>Mukul</h1>} />
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;