import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import reducers from './reducer/reducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { responsiveStoreEnhancer } from 'redux-responsive'
import { createStore, compose } from 'redux'
const store = createStore(reducers, responsiveStoreEnhancer)


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
