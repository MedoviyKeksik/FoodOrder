import React from "react"
import InputField from "../../components/inputField/InputField";
import { store } from "../../store";
import { loadLoclization } from "../localeSwitcher/actions";
import { userLogin } from "./actions";
import { FOODORDER_LOGINFORM_LOGIN, FOODORDER_LOGINFORM_PASSWORD, FOODORDER_LOGINFORM_BUTTON, FOODORDER_LOGINFORM_TITLE} from "./constants";
import localization from './messages';
import './LoginForm.scss';
import { FormattedMessage } from "react-intl";

store.dispatch(loadLoclization(localization));

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }

        this.handleLoginChange = this.handleChange.bind(this, 'login');
        this.handlePasswordChange = this.handleChange.bind(this, 'password');
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(field, event) {
        const tmp = {};
        tmp[field] = event.target.value;
        this.setState(tmp);
    }

    handleSubmit(event) {
        store.dispatch(userLogin({
            login: this.state.login,
            password: this.state.password
        }));
        event.preventDefault();
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <h2 className="login-form__title"><FormattedMessage defaultMessage="Login" id={FOODORDER_LOGINFORM_TITLE} /></h2>
                <InputField 
                    label={<FormattedMessage defaultMessage="Phone/Email:" id={FOODORDER_LOGINFORM_LOGIN} />}
                    inputType="text" 
                    name="login" 
                    isRequired={true} 
                    onChange={this.handleLoginChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Password:" id={FOODORDER_LOGINFORM_PASSWORD}  />}
                    inputType="password" name="password" 
                    isRequired={true} 
                    onChange={this.handlePasswordChange} 
                />
                <button className="login-form__button" type="submit">
                    <FormattedMessage defaultMessage="Login" id={FOODORDER_LOGINFORM_BUTTON} />
                </button>
            </form>
        )
    }
}

export default LoginForm;