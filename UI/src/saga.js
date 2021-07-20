
import { FOOD_FETCH_REQUESTED } from './pages/home/constants';
import { USER_LOGIN_REQUESTED } from './containers/loginForm/constants';
import foodSaga from './pages/home/saga';
import userLoginSaga from './containers/loginForm/saga';

import { takeEvery } from '@redux-saga/core/effects';

function* rootSaga() {
    yield takeEvery(USER_LOGIN_REQUESTED, userLoginSaga);
    yield takeEvery(FOOD_FETCH_REQUESTED, foodSaga);
}

export default rootSaga;