import React from 'react';
import '../App.css';
import Footer from './footer'
import AddTodo from '../Containers/addTodo'
import VisibleTodoList from '../Containers/visibleTodoList'

const App = ({ match: { params }}) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Footer />
  </div>
)

export default App;