import counterReducer from "./counter.reducer";
import productsReducer from "./products.reducer";
import todosReducer from "./todos.reducer";
import {combineReducers} from 'redux';
var rootReducer = combineReducers({
    counterR:counterReducer,
    productsR:productsReducer,
    todosR:todosReducer
})
export default rootReducer;