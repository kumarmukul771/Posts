import React, { Component } from 'react';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom'; 

class Blog extends Component {
    
    render () {

        return (
            <div>
                <header className='Link'>
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" exact render={()=><p>Blog new post</p>} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>               
            </div>
        );
    }
}

export default Blog;