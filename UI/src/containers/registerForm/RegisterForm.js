import React from "react"
import InputField from "../../components/inputField/InputField";
import { store } from "../../store";
import { loadLoclization } from "../localeSwitcher/actions";
import { FOODORDER_REGISTERFORM_EMAIL, FOODORDER_REGISTERFORM_NAME, FOODORDER_REGISTERFORM_PASSWORD, FOODORDER_REGISTERFORM_PHONE, FOODORDER_REGISTERFORM_SURNAME } from "./constatnts";
import localization from './messages'

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
            <form onSubmit={this.handleSubmit}>
                <InputField titleDefault="Name:" titleId={FOODORDER_REGISTERFORM_NAME} type="text" name="name" isRequired={true} onChange={this.handleNameChange} />
                <InputField titleDefault="Surname:" titleId={FOODORDER_REGISTERFORM_SURNAME} type="text" name="name" isRequired={true} onChange={this.handleSurnameChange} />
                <InputField titleDefault="Email:" titleId={FOODORDER_REGISTERFORM_EMAIL} type="email" name="email" isRequired={true} onChange={this.handleEmailChange} />
                <InputField titleDefault="Phone:" titleId={FOODORDER_REGISTERFORM_PHONE} type="phone" name="phone" isRequired={true} onChange={this.handlePhoneChange} />
                <InputField titleDefault="Password:" titleId={FOODORDER_REGISTERFORM_PASSWORD} type="password" name="password" isRequired={true} onChange={this.handlePasswordChange} />
                <input type="submit" />
            </form>
        );
    }
}

export default RegisterForm;