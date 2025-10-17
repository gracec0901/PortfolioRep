import { createStore, combineReducers} from 'redux';

const reducers ={};

const rootReuducer = combineReducers(reducers);
export const coinfigureStoore = ()=> createStore(rootReducer);