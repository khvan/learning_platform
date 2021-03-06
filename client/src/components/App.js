import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import HomePage from './HomePage';
import history from '../history';
import Header from './header';

const App = () => {
  return(
 <div className="ui container" > 
  <Router history={history}>
    <div 
    style={{"backgroundImage": "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"}}>
      <Header />
      <Switch>
        <Route path="/" exact component = {HomePage} />
        <Route path="/streams/list" exact component = {StreamList} />
        <Route path="/streams/new" exact component = {StreamCreate} />
        <Route path="/streams/delete/:id" exact component = {StreamDelete} />
        <Route path="/streams/edit/:id"  exact component = {StreamEdit} />
        <Route path="/streams/:id" exact component = {StreamShow} />
      </Switch>
    </div>
  </Router>
  </div>
  )
}


export default App;