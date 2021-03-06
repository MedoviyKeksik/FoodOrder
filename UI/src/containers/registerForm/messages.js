import { FOODORDER_REGISTERFORM_TITLE, FOODORDER_REGISTERFORM_BUTTON, FOODORDER_REGISTERFORM_EMAIL, FOODORDER_REGISTERFORM_NAME, FOODORDER_REGISTERFORM_PASSWORD, FOODORDER_REGISTERFORM_PHONE, FOODORDER_REGISTERFORM_SURNAME } from "./constatnts";

export const en = {
    [FOODORDER_REGISTERFORM_TITLE]: 'Register',
    [FOODORDER_REGISTERFORM_NAME]: 'Name: ',
    [FOODORDER_REGISTERFORM_SURNAME]: 'Surname: ',
    [FOODORDER_REGISTERFORM_EMAIL]: 'Email: ',
    [FOODORDER_REGISTERFORM_PHONE]: 'Phone: ',
    [FOODORDER_REGISTERFORM_PASSWORD]: 'Password: ',
    [FOODORDER_REGISTERFORM_BUTTON]: 'Register'
};

export const ru = {
    [FOODORDER_REGISTERFORM_TITLE]: 'Регистрация',
    [FOODORDER_REGISTERFORM_NAME]: 'Имя: ',
    [FOODORDER_REGISTERFORM_SURNAME]: 'Фамилия: ',
    [FOODORDER_REGISTERFORM_EMAIL]: 'Email: ',
    [FOODORDER_REGISTERFORM_PHONE]: 'Телефон: ',
    [FOODORDER_REGISTERFORM_PASSWORD]: 'Пароль: ',
    [FOODORDER_REGISTERFORM_BUTTON]: 'Зарегистрироваться'
};

const localization = {en, ru}
export default localization;