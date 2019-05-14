import React from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './Store/Reducers';
import AutoEntrepreneur from './AutoEntrepreneur';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(reducers,composeEnhancers(
  applyMiddleware(promiseMiddleware)
))


const App = () => (
  <Provider store={createStoreWithMiddleware}>
    <AutoEntrepreneur/>
  </Provider>
);



export default App;