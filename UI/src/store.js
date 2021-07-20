import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import localizerReducer from './containers/localeSwitcher/reducer';
import createSagaMiddleware from 'redux-saga'
import  foodReducer from './pages/home/reducer';
import { reducer } from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({root: reducer, localizer: localizerReducer, food: foodReducer});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);