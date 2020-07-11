import React from 'react'
import { useDispatch } from 'react-redux'
import { changefilter } from '../reducers/anecdoteReducer'
const Filter = () => {
  const dispatch = useDispatch()
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={({target})=>{dispatch(changefilter(target.value))}} />
    </div>
  )
}

export default Filter
