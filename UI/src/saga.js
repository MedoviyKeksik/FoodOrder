
import { takeEvery } from '@redux-saga/core/effects';
import { FOOD_FETCH_REQUESTED } from './containers/foodContainer/constants';
import foodSaga from './containers/foodContainer/saga';
import { USER_LOGIN_REQUESTED } from './containers/loginForm/constants';
import userLoginSaga from './containers/loginForm/saga';

function* rootSaga() {
    yield takeEvery(USER_LOGIN_REQUESTED, userLoginSaga);
    yield takeEvery(FOOD_FETCH_REQUESTED, foodSaga);
}

export default rootSaga;