import { createStore, combineReducers } from 'redux';

import contactFormReducer from './contactFormReducer.ts';

const rootReducer = combineReducers({

  contactForm: contactFormReducer,
});

export const configureStore = () => createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;