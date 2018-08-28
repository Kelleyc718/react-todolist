//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import UpdateTodo from './components/UpdateTodo';

import './index.css';

ReactDOM.render(
  <div className="container">
      <Router>
            <Route path='/add' component={AddTodo} />
            <Route exact path='/' component={ListTodo} />
            <Route path='/update/:id' component={UpdateTodo} />
      </Router>
  </div>
,
  document.getElementById('root')
);