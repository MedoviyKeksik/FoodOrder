import React from "react"
import { FormattedMessage } from "react-intl";
import InputField from "../../components/inputField/InputField";
import { store } from "../../store";
import { loadLoclization } from "../localeSwitcher/actions";
import { FOODORDER_REGISTERFORM_BUTTON, FOODORDER_REGISTERFORM_EMAIL, FOODORDER_REGISTERFORM_NAME, FOODORDER_REGISTERFORM_PASSWORD, FOODORDER_REGISTERFORM_PHONE, FOODORDER_REGISTERFORM_SURNAME, FOODORDER_REGISTERFORM_TITLE } from "./constatnts";
import localization from './messages';
import './RegisterForm.scss';

store.dispatch(loadLoclization(localization));

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: ''
        }

        this.handleNameChange = this.handleChange.bind(this, 'name');
        this.handleSurnameChange = this.handleChange.bind(this, 'surname');
        this.handleEmailChange = this.handleChange.bind(this, 'email');
        this.handlePhoneChange = this.handleChange.bind(this, 'phone');
        this.handlePassswordChange = this.handleChange.bind(this, 'password');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, event) {
        const tmp = {};
        tmp[field] = event.target.value;
        this.setState(tmp);
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO: Submit Registration data
    }

    render() {
        return (
            <form className="register-form" onSubmit={this.handleSubmit}>
                <h2 className="register-form__title"><FormattedMessage defaultMessage="Register" id={FOODORDER_REGISTERFORM_TITLE} /></h2>
                <InputField 
                    label={<FormattedMessage defaultMessage="Name:" id={FOODORDER_REGISTERFORM_NAME} />}
                    inpitType="text" 
                    name="name" 
                    isRequired={true} 
                    onChange={this.handleNameChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Surname:" id={FOODORDER_REGISTERFORM_SURNAME} />}
                    inputType="text" 
                    name="name" 
                    isRequired={true} 
                    onChange={this.handleSurnameChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Email:" id={FOODORDER_REGISTERFORM_EMAIL}  />}
                    inputType="email" 
                    name="email" 
                    isRequired={true} 
                    onChange={this.handleEmailChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Phone:"  id={FOODORDER_REGISTERFORM_PHONE}  />}
                    inputType="phone" 
                    name="phone" 
                    isRequired={true} 
                    onChange={this.handlePhoneChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Password:" id={FOODORDER_REGISTERFORM_PASSWORD} />}
                    inputType="password" 
                    name="password" 
                    isRequired={true} 
                    onChange={this.handlePasswordChange} 
                />
                <button type="button" className="register-form__button"> 
                    <FormattedMessage defaultMessage="Register" id={FOODORDER_REGISTERFORM_BUTTON} />
                </button>
            </form>
        );
    }
}

export default RegisterForm;