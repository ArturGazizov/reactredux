import React from 'react'
//import { useDispatch,useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { voteanecdote} from '../reducers/anecdoteReducer'
//import { madeavote,expired } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteList = (props) => {//() => {
	  //const dispatch = useDispatch()
	  const thefilter =props.filter //useSelector(state => state.filter)
const anecdotes =props.anecdotes //useSelector(state => state.anecdotes)

/*
  const vote = (id,text) => {
anecdoteService.vote(id).then(()=>{dispatch(voteanecdote(id))
    dispatch(madeavote(text))
    setTimeout(function(){dispatch(expired())},5000)})
  }
*/

  const sorted=(anarray)=>
  {let anarray2=anarray
    anarray2.sort(function(a, b){return b.votes-a.votes})
    return anarray2}



return (
	<div>
      { 
      	sorted(anecdotes)
        .filter((it)=>it.content.includes(thefilter))
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            {/*<button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>*/}
            <button onClick={(() => props.voteanecdote(anecdote.id))}>vote</button>
          </div>
        </div>
      )
    }

      </div>
  )
}


const mapDispatchToProps = {
  voteanecdote
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}
//export default AnecdoteList
const AnecdoteListConnected = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)
export default AnecdoteListConnected
