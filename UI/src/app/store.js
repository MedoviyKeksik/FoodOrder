import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import localizerReducer from '../features/localizer/localizerSlice'

import createSagaMiddleware from 'redux-saga'
import saga from './sagas'
import { reducer } from '../features/food/foodSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({localizer: localizerReducer, food: reducer});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);