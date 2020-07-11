import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = {filter:'',notification:"","anecdotes":anecdotesAtStart.map(asObject)}
/*
export const expired = (anecdote) => {

  return {
    type: 'nulln',
    data:  ""
  }
}



export const addedanew = (anecdote) => {
  return {
    type: 'addedn',
    data:  anecdote 
  }
}



export const madeavote = (text) => {
  return {
    type: 'votedn',
    data:  text 
  }
}



export const addanecdote = (anecdote) => {
  return {
    type: 'add',
    data: { anecdote }
  }
}
*/

export const addanecdote = event => {
  return async dispatch => {
 const anecdote = {'content':event.target.note.value,
  'id':(100000 * Math.random()).toFixed(0),
'votes':0}
  anecdoteService
      .createNew(anecdote).then(() => {
dispatch({type: 'add',data: { anecdote },})



dispatch(setNotification((`'${anecdote.content}' was added`),5000))





//dispatch({type: 'addedn',data:  anecdote.content })
//setTimeout(function(){dispatch({type: 'nulln'})},5000)
})
  }
}

/*
export const voteanecdote = (id) => {
  return {
    type: 'vote',
    data: { id }
  }
}
*/







export const voteanecdote = (id) => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    await anecdoteService.vote(id).then(()=>{
/**/
dispatch({
      type: 'vote',
      data: { id }
    })

/*
dispatch({
    type: 'votedn',
    data:  
    })
setTimeout(function(){dispatch({type: 'nulln'})},5000)
*/

dispatch(setNotification((`'${notes.find((it)=>it.id==id).content}' was voted`),5000))

    })


    
  }
}
/**/
/*
const vote = (id,text) => {
anecdoteService.vote(id).then(()=>{dispatch(voteanecdote(id))
    dispatch(madeavote(text))
    setTimeout(function(){dispatch(expired())},5000)})
  }
  */


export const changefilter = (bywhat) => {
  return {
    type: 'changefilter',
    data:  bywhat
  }
}


export const anecdotesReducer = (state = initialState.anecdotes, action) => {
switch (action.type) {
    case 'vote':
      return [{...state.find((it)=>it.id==action.data.id),votes:state.find((it)=>it.id==action.data.id).votes+1},...state.filter(x=>x.id!=action.data.id)]
    case 'add':
      return [...state,action.data.anecdote]
    case 'INIT_ans':
      return action.data
    default:
      return state
  }


}
/*
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ans',
    data: anecdotes,
  }
}
*/
export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ans',
      data: notes,
    })
  }
}




export const setNotification = (text,miliseconds) => {
  return async dispatch => {

dispatch({
      type: 'arbitrary_notification',
      data: text,
    })
const timer=setTimeout(function(){dispatch({
      type: 'arbitrary_notification',
      data: '',
    })},miliseconds)

dispatch({
      type: 'restart',
      data: timer,
    })

  }
}



export const restartReducer=(state = null, action)=>
{
switch (action.type) {
    case 'restart':
      if (state==null)
          return action.data
      else
        clearTimeout(state)
      return action.data
    default:
      return state
}
}



export const notificationReducer=(state = initialState.notification, action)=>
{
switch (action.type) {
    case 'arbitrary_notification':
      return (`${action.data}`)
    case 'addedn':
      return (`'${action.data}' was added`)
    case 'votedn':
      return (`'${action.data}' was voted`)
    case 'nulln':
      return ("")
    default:
      return state
}
}

export const filterReducer=(state = initialState.filter, action)=>
{
switch (action.type) {
    case 'changefilter':
      {return action.data}
    default:
      {return state}
}
}
