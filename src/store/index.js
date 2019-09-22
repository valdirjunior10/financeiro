import {createStore, combineReducers} from 'redux';
import despesaReducer from '../reducers/despesa';

const reducers = combineReducers({
    despesaReducer,
});

export default createStore(reducers);