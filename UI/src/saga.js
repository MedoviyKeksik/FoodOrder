
import { FOOD_FETCH_REQUESTED } from './pages/home/constants';
import { USER_LOGIN_REQUESTED } from './containers/loginForm/constants';
import foodSaga from './pages/home/saga';
import userLoginSaga from './containers/loginForm/saga';
import accountSaga from './pages/account/saga';
import orderSaga from './pages/cart/saga';
import foodAddCatalogSaga from './containers/foodForm/saga'

import { takeEvery } from '@redux-saga/core/effects';
import { HISTORY_REQUESTED } from './pages/account/constants';
import { ORDER_SENT } from './pages/cart/constants';
import { FOOD_ADD_CATALOG_SENT } from './containers/foodForm/constants';

function* rootSaga() {
    yield takeEvery(USER_LOGIN_REQUESTED, userLoginSaga);
    yield takeEvery(FOOD_FETCH_REQUESTED, foodSaga);
    yield takeEvery(HISTORY_REQUESTED, accountSaga)
    yield takeEvery(ORDER_SENT, orderSaga);
    yield takeEvery(FOOD_ADD_CATALOG_SENT, foodAddCatalogSaga);
}

export default rootSaga;