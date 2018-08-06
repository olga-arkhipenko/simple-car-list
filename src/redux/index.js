import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/reducer';

const configureStore = () => createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
);

export default configureStore;
