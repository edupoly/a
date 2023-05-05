import React from 'react'
import {connect} from 'react-redux'
function Second(props) {

    var [newtask,setNewtask]=React.useState('');
    function handleInput(e){
      setNewtask(e.target.value)
    }
  return (
    <div className='border border-2 p-2 m-2 w-25'>
        <h2>Second</h2>
        <input type="text" onChange={handleInput}/>
        <button onClick={()=>{props.dispatch({type:'ADDTASK',payload:newtask})}}>Add Todo</button>
        {
            props.todosR.todos.map((t)=>{
                return <li key={t}>{t}</li>
            })
        }
    </div>
  )
}

export default connect(function(state){return state})(Second)