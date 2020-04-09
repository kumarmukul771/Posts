import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'; 
import Blog from './containers/Blog/Blog';
import FullPost from './containers/Blog/FullPost/FullPost';

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <Route path="/new-post" exact component={Blog} />
        </div>
      
    );
  }
}

export default App;
