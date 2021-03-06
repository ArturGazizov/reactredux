

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

//import anecdoteService from './services/anecdotes'
import React, {useEffect} from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()
  
/*  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  }, [dispatch])
*/


    useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch]) 

  return (
    <div>
      <h2>Anecdotes</h2>

<h2>create new</h2>
<Notification/>
	<Filter/>
      <AnecdoteForm/>
      <AnecdoteList/>
    </div>
  )
}

export default App