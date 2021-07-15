import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import localizerReducer from './containers/localeSwitcher/reducer';

import createSagaMiddleware from 'redux-saga'
import { reducer } from './containers/foodContainer/reducer';
import saga from './containers/foodContainer/saga';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({localizer: localizerReducer, food: reducer});

    export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);