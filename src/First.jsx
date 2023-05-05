import React from 'react'
import {connect} from 'react-redux'
import { decAction, incAction, resetAction } from './store/actions/actions'
function First(props) {
    console.log(props)
  return (
    <div className="border border-2 m-2 p-2 w-50">
        <h2>Counter</h2>
        <h3>{props.count}</h3>
        <button onClick={()=>{props.incCount()}}>Increment</button>
        <button onClick={()=>{props.decCount()}}>Decrement</button>
        <button onClick={()=>{props.resetCount()}}>Reset</button>
    </div>
  )
}
function mapStateToProps(state){
  return state.counterR
}
function mapDispatchToProps(dispatch){
  return {
    incCount:()=>{dispatch(incAction())},
    decCount:()=>{dispatch(decAction())},
    resetCount:()=>{dispatch(resetAction())},
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(First)