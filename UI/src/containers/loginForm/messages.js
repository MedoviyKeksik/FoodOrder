import { FOODORDER_LOGINFORM_LOGIN, FOODORDER_LOGINFORM_PASSWORD, FOODORDER_LOGINFORM_TITLE, FOODORDER_LOGINFORM_BUTTON } from "./constants";

export const en = {
    [FOODORDER_LOGINFORM_TITLE]: 'Login',
    [FOODORDER_LOGINFORM_LOGIN]: 'Phone/Email: ',
    [FOODORDER_LOGINFORM_PASSWORD]: 'Password: ',
    [FOODORDER_LOGINFORM_BUTTON]: 'Login'
}

export const ru = {
    [FOODORDER_LOGINFORM_TITLE]: 'Вход',
    [FOODORDER_LOGINFORM_LOGIN]: 'Телефон/Email: ',
    [FOODORDER_LOGINFORM_PASSWORD]: 'Пароль: ',
    [FOODORDER_LOGINFORM_BUTTON]: 'Войти'
}

const localization = {en, ru};
export default localization;