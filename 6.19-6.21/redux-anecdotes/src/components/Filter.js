import React from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { changefilter } from '../reducers/anecdoteReducer'
const Filter = (props) => {//() => {
  //const dispatch = useDispatch()
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>

      filter {/*<input onChange={({target})=>{dispatch(changefilter(target.value))}} />*/}
  <input onChange={({target})=>{(props.changefilter(target.value))}} />
    </div>
  )
}

const mapDispatchToProps = {
  changefilter
}

//export default Filter
const FilterConnected = connect(null,mapDispatchToProps)(Filter)
export default FilterConnected