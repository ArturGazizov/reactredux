import React from 'react'
import { useDispatch } from 'react-redux'
import { addanecdote } from '../reducers/anecdoteReducer'
//import { expired,addedanew } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
const AnecdoteForm = () => {
	 const dispatch = useDispatch()

/*const add = (event) => {
    event.preventDefault()

    
  const object = {'content':event.target.note.value,
  'id':(100000 * Math.random()).toFixed(0),
'votes':0}



  anecdoteService
      .createNew(object).then(() => {dispatch(addanecdote(object))
    dispatch(addedanew(object))
    setTimeout(function(){dispatch(expired())},5000)})
    

  }
*/

return (

<form onSubmit={(event)=>{event.preventDefault();dispatch(addanecdote(event))}}>
{/*<form onSubmit={add}>*/}
        <div><input type="text" name="note"/></div>
        <button type="submit">create</button>
      </form>
  )
}
export default AnecdoteForm