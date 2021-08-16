import React from "react"
import InputField from "../../components/inputField/InputField";
import { loadLocalization } from "../localeSwitcher/actions";
import { userLogin } from "./actions";
import { FOODORDER_LOGINFORM_LOGIN, FOODORDER_LOGINFORM_PASSWORD, FOODORDER_LOGINFORM_BUTTON, FOODORDER_LOGINFORM_TITLE, FOODORDER_LOGINFORM_LOGINFAILED} from "./constants";
import localization from './messages';
import './LoginForm.scss';
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
        
        props.loadLoclization(localization);
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
        this.props.userLogin({
            login: this.state.login,
            password: this.state.password
        });
        event.preventDefault();
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <h2 className="login-form__title"><FormattedMessage defaultMessage="Login" id={FOODORDER_LOGINFORM_TITLE} /></h2>
                {this.props?.isLoginFailed && <h4><FormattedMessage defaultMessage="Login failed." id={FOODORDER_LOGINFORM_LOGINFAILED} /></h4>}
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

const mapStateToProps = (state) => {
    return {
        isLoginFailed: state.root.isLoginFailed
    };
}

const mapDispatchToProps = {
    loadLoclization: loadLocalization,
    userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);