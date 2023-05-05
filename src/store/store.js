import {createStore} from 'redux'
import rootReducer from './reducers/rootreducer'
var store = createStore(rootReducer)
export default store