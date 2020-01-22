import React from 'react';
import '../App.css';
import Footer from './footer'
import AddTodo from '../Containers/addTodo'
import VisibleTodoList from '../Containers/visibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;