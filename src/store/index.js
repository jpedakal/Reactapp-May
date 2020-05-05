import {createStore} from 'redux';
import postReducer from '../reducer/index'

const  store = createStore(postReducer);

export default store;