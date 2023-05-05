var initialState = {
    todos:['check clear','domain certificate','edo pani']
}
var todosReducer = function(state=initialState,action){
    if(action.type==='ADDTASK'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==='DELETETODO'){
        var temp = [...state.todos];
        temp.splice(action.payload,1);
        return {...state,todos:[...temp]}
    }
    return state
}
export default todosReducer;