import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { responsiveStoreEnhancer } from 'redux-responsive';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        responsiveStoreEnhancer,
        composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
}
