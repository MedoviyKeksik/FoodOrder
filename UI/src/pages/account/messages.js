import { FOODORDER_ACCOUNT_HISTORY, FOODORDER_ACCOUNT_INFO, FOODORDER_ACCOUNT_NODATA, FOODORDER_ACCOUNT_PLSLOGIN } from "./constants";

const en = {
    [FOODORDER_ACCOUNT_INFO]: 'Info',
    [FOODORDER_ACCOUNT_HISTORY]: 'History',
    [FOODORDER_ACCOUNT_PLSLOGIN]: 'Please login first',
    [FOODORDER_ACCOUNT_NODATA]: 'No data'
}

const ru = {
    [FOODORDER_ACCOUNT_INFO]: 'Информация',
    [FOODORDER_ACCOUNT_HISTORY]: 'История',
    [FOODORDER_ACCOUNT_PLSLOGIN]: 'Пожалйуста, войдите в свой аккаунт',
    [FOODORDER_ACCOUNT_NODATA]: 'Нет данных'
}

const localization = {en, ru};
export default localization;