import { call, put } from 'redux-saga/effects';
import { API_URL } from '../../constants';
import { requestFoodSucceed, requsetFoodFailed } from './actions';

function AddParams(url, params) {
    let result = url;
    let isFirst = true;
    for (let i in params) {
        if (params[i] != null) {
            result += (isFirst ? '?' : '&') + i + '=' + params[i];
            isFirst = false;
        } 
    }
    return result;
}

function* fetchFood(action) {
    try {
        const data = yield call(() => {
            return fetch(AddParams(API_URL + 'Food', action.payload))
                .then(res => res.json());
        });
        yield put(requestFoodSucceed(data));
    } catch (e) {
        yield put(requsetFoodFailed(e));
    }
}

export default fetchFood;